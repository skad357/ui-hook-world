import React, { createContext, useState, useEffect } from "react";
import Fetch from "../api/Fetch";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [drinkId, setdrinkId] = useState("");
  const [loadDrink, setloadDrink] = useState(false);
  const [drinkDetail, setdrinkDetail] = useState({});

  useEffect(() => {
    const getDrinkById = async () => {
      if (!drinkId) return;
      const result = await Fetch.cockTaildbApi(`/lookup.php?i=${drinkId}`);
      setloadDrink(true);
      if (result.status !== "error") {
        setdrinkDetail(result.drinks[0]);
        setloadDrink(false);
      }
    };
    getDrinkById();
  }, [drinkId]);

  return (
    <ModalContext.Provider value={{ setdrinkId, drinkDetail,setdrinkDetail,loadDrink }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
