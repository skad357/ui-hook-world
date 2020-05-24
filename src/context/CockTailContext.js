import React, { createContext, useState, useEffect } from "react";
import Fetch from "../api/Fetch";

export const CockTailContext = createContext();

const CockTailProvider = (props) => {
  const [queryFilter, setqueryFilter] = useState("");
  const [list, setlist] = useState([]);
  const [drinkList, setdrinkList] = useState([]);
  const [pendingCategoryLoad, setpendingCategoryLoad] = useState(false);
  const [categorySelection, setcategorySelection] = useState("");
  const [drinkFilter, setdrinkFilter] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (queryFilter) {
        setpendingCategoryLoad(true);
        const result = await Fetch.cockTaildbApi(
          `/list.php?${queryFilter}=list`
        );

        if (result.status !== "error") {
          setpendingCategoryLoad(false);
          // the Api return different data structure for each type,
          const dataFormat = result.drinks.map((drink, index) => {
            return {
              value: Object.values(drink)[0],
              ind: index,
            };
          });
          //   console.log(dataFormat);
          setlist(dataFormat);
        }
      }
    };
    getList();
  }, [queryFilter]);

  useEffect(() => {
    const getDrinks = async () => {
      if (queryFilter) {
        console.log("get data", queryFilter, categorySelection);
        const result = await Fetch.cockTaildbApi(
          `/filter.php?${queryFilter}=${categorySelection}`
        );
        if (result.status !== "error") {
          setdrinkList(result.drinks);
        }
      }
    };
    getDrinks();
  }, [categorySelection]);


  return (
    <CockTailContext.Provider
      value={{
        pendingCategoryLoad,
        queryFilter,
        setqueryFilter,
        list,
        setcategorySelection,
        drinkList,
        setdrinkList,
      }}
    >
      {props.children}
    </CockTailContext.Provider>
  );
};

export default CockTailProvider;
