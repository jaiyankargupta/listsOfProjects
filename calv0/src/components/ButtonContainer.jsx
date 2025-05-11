import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonConatiner = ({ handler }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsConatiner}>
      {button.map((item, idx) => {
        return (
          <button
            onClick={() => handler(item)}
            key={idx}
            className={styles.button}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonConatiner;
