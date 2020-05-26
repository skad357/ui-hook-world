import React, { useContext } from "react";
import DrinkView from "../components/DrinkView";
import { CockTailContext } from "../context/CockTailContext";

const DrinkList = () => {
  const {
    drinkFilterList,
    filterDrink,
    drinkList,
    categorySelection,
    setdrinkSearch,
    drinkSearch,
  } = useContext(CockTailContext);

  const onDrinkName = (e) => {
    setdrinkSearch(e.target.value);
    filterDrink(e.target.value);
  };

  return (
    <>
      {/* {categorySelection}gh */}
      {drinkList.length === 0 && !categorySelection ? (
        <h2 className="text-center my-4">
          {" "}
          No Results select an option &amp; Drink Type
        </h2>
      ) : (
        <div className="ml-4 mt-3">
          <label className="mr-3 text-white font-weight-bold"> SEARCH</label>
          <input
            className="w-25 pl-2 py-1 border border-secondary rounded"
            placeholder="Input Drink Name"
            name="drink"
            type="text"
            value={drinkSearch}
            onChange={onDrinkName}
          />
        </div>
      )}

      <div className="d-flex flex-wrap justify-content-center">
        {drinkFilterList.map((drink) => (
          <DrinkView key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </>
  );
};

export default DrinkList;
