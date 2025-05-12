import React from "react";
import styles from "./Container.module.css";

const container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default container;

//use for same ui like facebook. instagram
