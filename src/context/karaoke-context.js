import React, { useState } from "react";

export const KaraokeContext = React.createContext({});

export const KaraokeWrapper = ({ children, initialResults }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(initialResults);

  return (
    <KaraokeContext.Provider
      value={{ query, setQuery,  results, setResults }}
    >
      {children}
    </KaraokeContext.Provider>
  );
};
