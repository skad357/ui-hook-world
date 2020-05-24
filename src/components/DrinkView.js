import React from "react";

const DrinkView = ({ drink }) => {
  return (
    <div className="card my-4 mx-2 w-25">
      <img src={drink.strDrinkThumb} className='img-thumbnail mx-auto' alt='drink' />
      <div className="card-body">
        <p className="font-size-weight text-center">{drink.strDrink}</p>
      </div>
      <div className="card-footer"> 
        <button className="btn btn-danger btn-block text-white text-bold">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default DrinkView;
