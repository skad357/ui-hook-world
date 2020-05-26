import React, { createContext, useState, useEffect } from "react";
import Fetch from "../api/Fetch";

export const CockTailContext = createContext();

const CockTailProvider = (props) => {
  const [queryFilter, setqueryFilter] = useState("");
  const [list, setlist] = useState([]);
  const [drinkList, setdrinkList] = useState([]);
  const [pendingCategoryLoad, setpendingCategoryLoad] = useState(false);
  const [categorySelection, setcategorySelection] = useState("");
  const [drinkFilterList, setdrinkFilterList] = useState([]);
  const [drinkSearch, setdrinkSearch] = useState('');

  const filterDrink = (drinkSearch) => {
    if (drinkSearch.trim().length === 0) {
        setdrinkFilterList(drinkList);
    }else{
        const filterSearch = drinkList.filter(d=>d.strDrink.toLowerCase().indexOf(drinkSearch.toLowerCase())===0);
        setdrinkFilterList(filterSearch);
    }
  };

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
          setlist(dataFormat);
        }
      }
    };
    getList();
  }, [queryFilter]);

  useEffect(() => {
    const getDrinks = async () => {
      if (queryFilter) {
        const result = await Fetch.cockTaildbApi(
          `/filter.php?${queryFilter}=${categorySelection}`
        );
        if (result.status !== "error") {
          setdrinkList(result.drinks);
          setdrinkFilterList(result.drinks);
          setdrinkSearch('');
        }
      }
    };
    getDrinks();
    // eslint-disable-next-line
  }, [categorySelection]);

  return (
    <CockTailContext.Provider
      value={{
        pendingCategoryLoad,
        queryFilter,
        setqueryFilter,
        list,
        setcategorySelection,
        drinkFilterList,
        // setdrinkSearch,
        filterDrink,
        drinkList,
        categorySelection,
        setdrinkSearch,
        drinkSearch
      }}
    >
      {props.children}
    </CockTailContext.Provider>
  );
};

export default CockTailProvider;
