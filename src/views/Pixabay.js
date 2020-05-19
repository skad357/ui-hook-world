import React from "react";
import GoHome from "../components/GoHome";
import HeaderSearch from "../components/HeaderSearch";
import ImageListView from "../components/ImageListView";
import PixabayProvider from "../context/PixabayImageContext";

const Pixabay = () => {
  const headTitle = "Pixabay Searcher";

  return (
    <PixabayProvider>
      <GoHome />
      <HeaderSearch title={headTitle} />
      <ImageListView />
    </PixabayProvider>
  );
};

export default Pixabay;
