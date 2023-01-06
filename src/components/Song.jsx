import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const srcset = (imageUrl) => ({
  src: `${imageUrl}`,
  srcSet: `${imageUrl}&dpr=2 2x`,
});

const Song = (image) => {
  const { alt_description, urls, links, title } =
    image;

  return (
    <ImageListItem>
      <a href={urls.raw} target="_blank" rel="noopener noreferrer">
        <img {...srcset(urls.regular)} alt={alt_description} />
      </a>
      <a href={links.html} target="_blank" rel="noopener noreferrer">
        <ImageListItemBar
          position="top"
          title={<div className="px-2">{title}</div>}
          className="px-2"
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          actionIcon={
            <IconButton sx={{ color: "white" }}>
              <PlayArrowIcon/>
            </IconButton>
          }
          actionPosition="left"
        />
      </a>
    </ImageListItem>
  );
};

export default Song;
