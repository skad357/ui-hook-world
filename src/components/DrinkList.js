import React, { useContext, useState } from "react";
import DrinkView from "../components/DrinkView";
import { CockTailContext } from "../context/CockTailContext";

const DrinkList = () => {
  const { drinkList } = useContext(CockTailContext);

  const [drink, setdrink] = useState("");

  const onDrinkName = (e) => {
    setdrink(e.target.value);

    // const filtered = 
    // setdrinkList(drink.strDrink.toLowerCase().search(e.target.value.toLowerCase() == 0));
  };

  return (
    <>
      <div className="ml-4 mt-3">
        <label className="mr-3 text-white font-weight-bold"> SEARCH</label>
        <input
          className="w-25 pl-2 py-1 border border-secondary rounded"
          placeholder="Input Drink Name"
          name="drink"
          type="text"
          value={drink}
          onChange={onDrinkName}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {drinkList.map((drink) => (
          <DrinkView key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </>
  );
};

export default DrinkList;
