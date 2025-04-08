import React, { createContext, useLayoutEffect, useReducer } from "react";
import { meals } from "../utils/constants/meals";
import { toast } from "react-toastify";

export const MealsContext = createContext({
  newMeals: [],
  handleAddNewMeals: () => {},
});

const initialState = {
  meals: meals,
  newMeals: [],
};
const ACTIONS_TYPES = {
  ADD: "ADD",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  ORDER: "ORDER",
};

const reducer = (state, action) => {
  const prevMeals = state.meals;
  const nextMeals = state.newMeals;
  const mealsAction = action.payload;

  switch (action.type) {
    case ACTIONS_TYPES.ADD: {
      const existingItem = nextMeals.find((item) => item.id === mealsAction.id);

      if (existingItem) {
        const updatedMeals = nextMeals.map((item) => {
          if (item.id === mealsAction.id) {
            return { ...item, amount: item.amount + mealsAction.value };
          }
          return item;
        });

        return {
          ...state,
          newMeals: updatedMeals,
        };
      }
      const mealToAdd = prevMeals.find((item) => item.id === mealsAction.id);
      if (mealToAdd) {
        return {
          ...state,
          newMeals: [...nextMeals, { ...mealToAdd, amount: mealsAction.value }],
        };
      }
    }

    case ACTIONS_TYPES.INCREASE:
      return {
        ...state,
        newMeals: nextMeals.map((meal) =>
          meal.id === mealsAction ? { ...meal, amount: meal.amount + 1 } : meal
        ),
      };
    case ACTIONS_TYPES.DECREASE:
      const findedItem = nextMeals.find((item) => item.id === mealsAction);
      if (findedItem.amount === 1) {
        return {
          ...state,
          newMeals: nextMeals.filter((item) => item.id !== mealsAction),
        };
      }
      return {
        ...state,
        newMeals: nextMeals.map((meal) =>
          meal.id === mealsAction ? { ...meal, amount: meal.amount - 1 } : meal
        ),
      };
    case ACTIONS_TYPES.ORDER:
      return {
        ...state,
        newMeals: [],
      };
    default:
      return state;
  }
};
export const MealsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { newMeals } = state;

  const handleAddNewMeals = (data) => {
    dispatch({ type: "ADD", payload: data });
    console.log(data);
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const handleDecrement = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const handleOrderFood = () => {
    dispatch({ type: "ORDER" });
    toast.info("Succesfull ordered");
  };

  return (
    <MealsContext.Provider
      value={{
        newMeals,
        onAddMeals: handleAddNewMeals,
        onIncrease: handleIncrement,
        onDecrease: handleDecrement,
        onOrder: handleOrderFood,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
