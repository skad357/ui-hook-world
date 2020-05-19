import React, { createContext, useState, useEffect } from "react";
import Fetch from "../api/Fetch";

export const PixabayImgContext = createContext();

const PixabayImgProvider = (props) => {
  const [pixabayImages, setpixabayImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)

  const [searchImages, findImages] = useState({
    picSearch: "",
    picType: "",
  });

  useEffect(() => {
    const { picSearch, picType } = searchImages;
    if (picSearch) {
      const getImages = async () => {
        if (picSearch) {
          setLoading(true);
          const result = await Fetch.get(
            `q=${picSearch}&image_type=${picType}&page=${page}`
          );
          if (result.status !== "error") {
            setLoading(false);
            setpixabayImages(result.hits);
          }
        }
      };
      getImages();
    }
  }, [searchImages,page]);
  return (
    <PixabayImgContext.Provider
      value={{
        searchImages,
        pixabayImages,
        loading,
        findImages,
        page,
        setPage
      }}
    >
      {props.children}
    </PixabayImgContext.Provider>
  );
};

export default PixabayImgProvider;
