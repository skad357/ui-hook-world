import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  custom: {
    position: "absolute",
    width: 450,
    backgroundColor: "#dae0e5",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'2rem'
  },
}));

const formatIngredientsXMeasures = (info) => {
  let ingredientsFormat = [];
  let ind = 1;
  for (const item in info) {
    if (item.indexOf("strIngredient") >= 0 && info[item]) {
      const measure = info[`strMeasure${ind}`];
      ingredientsFormat.push(
        <li key={ind}>{`${info[`strIngredient${ind}`]} ${
          measure ? measure : ""
        }`}</li>
      );
      ind++;
    }
  }

  return ingredientsFormat;
};

const DrinkView = ({ drink }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { setdrinkId, drinkDetail, setdrinkDetail, loadDrink } = useContext(
    ModalContext
  );

  return (
    <div className="card my-4 mx-2 w-25">
      <img
        src={drink.strDrinkThumb}
        className="img-thumbnail mx-auto"
        alt={drink.strDrinkThumb}
      />
      <div className="card-body">
        <p className="font-size-weight text-center">{drink.strDrink}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-danger btn-block text-white text-bold"
          onClick={() => {
            setdrinkId(drink.idDrink);
            handleOpen();
          }}
        >
          View Recipe
        </button>
        <Modal
          open={open}
          onClose={() => {
            setdrinkId(null);
            setdrinkDetail({});
            handleClose();
          }}
        >
          <div style={modalStyle} className={classes.custom}>
            {loadDrink ? (
                <Loading />
            ) : (
              <>
                <h2 className="text-center">{drinkDetail.strDrink}</h2>
                <h3 className="mt-4">Instructions</h3>
                <p>{drinkDetail.strInstructions}</p>

                <img
                  className="img-fluid mb-4"
                  src={drinkDetail.strDrinkThumb}
                  alt={drinkDetail.strCategory}
                />
                <h3>Ingredients &amp; Measure</h3>
                <ul>{formatIngredientsXMeasures(drinkDetail)}</ul>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DrinkView;
