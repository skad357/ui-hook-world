import React from "react";

const ImageLinker = ({ imgUrl, imgLink }) => {
  return (
    <div className="my-3"> 
      {imgUrl ? (
        <a href={imgLink} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl}  alt="Logo" />
        </a>
      ) : null}
    </div>
  );
};

export default ImageLinker;
