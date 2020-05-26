import React from "react";
import GoHome from "../components/GoHome";
import Header from "../components/Header";
import CockTailCategoryOption from "../components/CockTailCategoryOption";
import CockTailProvider from "../context/CockTailContext";
import ModalProvider from "../context/ModalContext";
import CockTailSelector from "../components/CockTailSelector";
import DrinkList from "../components/DrinkList";

const COCKTAILDB_HEADER_MESSAGE = "CockTail World";

const COCKTAIL_CATEGORIES = [
  {
    filter: "Category",
    query: "c",
    imgPreview:
      "https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613_150.jpg",
  },
  {
    filter: "Glass",
    query: "g",
    imgPreview:
      "https://cdn.pixabay.com/photo/2016/07/21/11/17/mineral-water-1532300_150.jpg",
  },
  {
    filter: "Ingredients",
    query: "i",
    imgPreview:
      "https://cdn.pixabay.com/photo/2015/10/21/07/10/lime-998903_150.jpg",
  },
  {
    filter: "Alcohol",
    query: "a",
    imgPreview:
      "https://cdn.pixabay.com/photo/2018/12/28/01/34/rum-3898745_150.jpg",
  },
];
const CockTailDB = () => {
  return (
    <ModalProvider>
      <CockTailProvider>
        <GoHome className="position-fixed" />
        <Header title={COCKTAILDB_HEADER_MESSAGE} />
        <div className="bg-primary">
          <h1 className="text-center my-4">List Cocktails By </h1>
          <div className="d-flex flex-nowrap justify-content-center mb-2">
            {COCKTAIL_CATEGORIES.map((option) => (
              <CockTailCategoryOption key={option.query} option={option} />
            ))}
          </div>
        </div>
        <div className="d-flex bg-secondary flex-grow-1">
          <div className="w-25 bg-danger">
            <CockTailSelector />
          </div>
          <div className="w-75 bg-gray vh-100 overflow-auto">
            <DrinkList />
          </div>
        </div>
      </CockTailProvider>
    </ModalProvider>
  );
};

export default CockTailDB;
