import { useEffect } from "react";
import styles from "./styles.css";

import PhotoSwipeLightbox from "photoswipe/lightbox";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Gallery = ({ galleryID, imageArray }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {imageArray.map((image, index) => (
        <a
          href={image.url}
          // data-pswp-width="500px"
          // data-pswp-height="200px"
          key={galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.url} alt="" />
        </a>
      ))}
    </div>
  );
};
