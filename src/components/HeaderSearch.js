import React, { useState, useContext } from "react";
import ErrorViewer from "../components/ErrorViewer";
import { PixabayImgContext } from "../context/PixabayImageContext";

// there is not an api for type images so only hardcoded this time
const imageTypeOptions = [
  { key: 1, value: "all" },
  { key: 2, value: "photo" },
  { key: 3, value: "illustration" },
  { key: 4, value: "vector" },
];

const HeaderSearch = ({ title }) => {
  const [search, setSearch] = useState({
    picSearch: "",
    picType: "all",
  });
  const [emptySearchError, setemptySearchError] = useState(false);
  const { findImages,setPage } = useContext(PixabayImgContext);

  const getPixabayForm = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="align-self-start w-75 mt-4 mx-auto text-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (search.picSearch) {
          setPage(1);
          findImages(search);
          setemptySearchError(false);
          return;
        }
        setemptySearchError(true);
      }}
    >
      <h2 className="mt-2 mb-4">{title}</h2>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="picSearch"
            placeholder="Search"
            onChange={getPixabayForm}
          />
        </div>
        <div className="form-group col-md-3">
          <select
            className="form-control text-capitalize"
            name="picType"
            onChange={getPixabayForm}
          >
            {imageTypeOptions.map((opt) => (
              <option key={opt.key}>{opt.value}</option>
            ))}
          </select>
        </div>

        <div className="form-group col-md-3">
          <input
            className="btn btn-danger btn-block"
            type="submit"
            value="Search"
          />
        </div>
        {emptySearchError ? (
          <ErrorViewer className="mx-3" errorMessage={"Fill Search Field"} />
        ) : null}
      </div>
    </form>
  );
};

export default HeaderSearch;
