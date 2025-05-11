import React from "react";
import styles from "./Item.module.css";
const Item = ({ list }) => {
  return (
    <>
      {list.map((i) => {
        return (
          <li className={styles.rustyn} key={i}>
            {i}
          </li>
        );
      })}
    </>
  );
};

export default Item;
