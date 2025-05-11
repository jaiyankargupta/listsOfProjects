import React from "react";
import styles from "./Display.module.css";

const Display = ({ add }) => {
  return <input className={styles.display} type="text" readOnly value={add} />;
};

export default Display;
