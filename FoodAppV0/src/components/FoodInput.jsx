import styles from "./FoodInput.module.css";
import React from "react";

const FoodInput = ({ handler, add }) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="enter food items"
        onKeyDown={handler}
      />
      <h2>Your Food : {add}</h2>
    </>
  );
};

export default FoodInput;
