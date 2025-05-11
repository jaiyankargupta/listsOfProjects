import React from "react";
import Item from "./item";

const ItemsLists = ({ list }) => {
  return (
    <div>
      <ul>
        <Item list={list} />
      </ul>
    </div>
  );
};

export default ItemsLists;
