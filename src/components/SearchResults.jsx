import { ImageList } from "@mui/material";
import React, { useRef, useCallback, useEffect, useContext } from "react";

import { KaraokeContext } from "../context/karaoke-context";
import { ListSongs, SearchSong } from "../services/song-search";
import Song from "./Song";

const INFINITE_SCROLL_NEXT_REQUEST_AT_PERCENT = 50;

const SearchResults = () => {
  const sentinel = useRef(null);
  const { query, results, setResults } = useContext(KaraokeContext);
  const cols = 3;
  const gap = 25;

  const nextRequestLimit = Math.floor(
    (INFINITE_SCROLL_NEXT_REQUEST_AT_PERCENT * results?.length || 0) / 100
  );

  const onSentinelIntersection = useCallback(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const GetResults = query
            ? () => SearchSong()
            : () => ListSongs();

          GetResults().then(({ response, status }) => {
            if (status !== 200) {
              return;
            }
            const { results } = response;
            setResults((prevResults) => [...prevResults, ...results]);
          });
        }
      }),
    [query, setResults]
  );

  useEffect(() => {
    try {
      const scrollObserver = new IntersectionObserver(onSentinelIntersection);
      const observerElement = sentinel.current;
      if (observerElement) {
        scrollObserver.observe(observerElement);
      }
      return () => observerElement && scrollObserver.unobserve(observerElement);
    } catch (err) {
      console.error(err);
      return err;
    }
  }, [onSentinelIntersection]);

  return (
    <div className="container-fluid">
      <div className="row">
        <ImageList variant="masonry" cols={cols} gap={gap}>
          {results?.map(({ id, ...rest }, idx) => (
            <React.Fragment key={id}>
              <Song id={id} {...rest} />
              {idx === nextRequestLimit && (
                <span className="sentinel visually-hidden" ref={sentinel} />
              )}
            </React.Fragment>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default SearchResults;
