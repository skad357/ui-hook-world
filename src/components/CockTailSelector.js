import React, { useContext } from "react";
import { CockTailContext } from "../context/CockTailContext";
import Loading from "../components/Loading";

const CockTailSelector = () => {
  const {
    pendingCategoryLoad,
    list,
    queryFilter,
    setcategorySelection,
  } = useContext(CockTailContext);
  const selectionOpt = (e) => {
    if (e.target.value) {
      setcategorySelection(e.target.value);
    }
  };
  return (
    <>
      {queryFilter ? (
        <form className="h-100">
          {pendingCategoryLoad ? (
            <Loading />
          ) : (
            <>
              <h2 className="px-4 py-2">Select</h2>
              <select
                className="form-control w-75 ml-4"
                name="selection"
                onChange={selectionOpt}
              >
                <option value="">-- Select</option>
                {list.map((option) => (
                  <option key={option.ind} value={option.value}>
                    {option.value}{" "}
                  </option>
                ))}
              </select>
            </>
          )}
        </form>
      ) : null}
    </>
  );
};

export default CockTailSelector;
