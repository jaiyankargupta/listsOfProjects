import styles from "./Item.module.css";
const Item = ({ list, bough, handlerThings }) => {
  return (
    <>
      <li className={`${styles.rustyn} ${bough && styles.bough}`}>{list}</li>
      <button onClick={handlerThings} className={styles.button}>
        Add
      </button>

      <button>Delete</button>
    </>
  );
};

export default Item;
