import React, { useContext } from "react";
import PixabayImage from "../components/PixabayImage";
import Loading from "../components/Loading";
import { PixabayImgContext } from "../context/PixabayImageContext";
import RoundButton from "../components/RoundButton";

const ImageListView = () => {
  const { pixabayImages, searchImages, loading, page, setPage } = useContext(
    PixabayImgContext
  );

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="column w-100">
      {searchImages.picSearch && !loading ? (
        <h2 className="text-center mt-2">
          {pixabayImages.length === 0 ? "No " : null} Results for{" "}
          <strong>{searchImages.picSearch}</strong>
        </h2>
      ) : null}
      {loading ? <Loading /> : null}

      <div className="row justify-content-between mt-3 mx-auto w-75">
        {pixabayImages.map((image) => (
          <PixabayImage key={image.id} pixaImg={image} />
        ))}
      </div>

      {searchImages.picSearch && !loading && pixabayImages.length > 0 ? (
        <div className="row mx-auto justify-content-center">
          {page > 1 ? (
            <RoundButton>
              <button onClick={previousPage}>&#8249;</button>
            </RoundButton>
          ) : null}
          <RoundButton>
            <button onClick={nextPage}>&#8250;</button>
            
          </RoundButton>
        </div>
      ) : null}
    </div>
  );
};

export default ImageListView;
