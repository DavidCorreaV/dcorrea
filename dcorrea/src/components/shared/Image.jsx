import React from "react";

const Image = ({ source, fallback, alt, classes }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={source} alt={alt} className={classes} />{" "}
      <img type="image/png" src={fallback} alt={alt} className={classes} />
    </picture>
  );
};

export default Image;
