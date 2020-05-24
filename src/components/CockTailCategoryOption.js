import React, { useContext } from "react";
import { CockTailContext } from "../context/CockTailContext";

const sectionStyle = (url) => ({
  backgroundImage: `url(${url})`,
  width: "6rem",
  height: "6rem",
  cursor: "pointer",
});

const CockTailCategoryOption = ({ option }) => {
  const { setqueryFilter } = useContext(CockTailContext);

  return (
    <div className="mx-4">
      <div
        style={sectionStyle(option.imgPreview)}
        className="rounded-circle"
        onClick={() => setqueryFilter(option.query)}
      ></div>
      <p className="text-center pt-3 font-weight-bold">{option.filter}</p>
    </div>
  );
};

export default CockTailCategoryOption;
