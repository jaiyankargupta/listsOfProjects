import React from "react";
import Items from "./items";
const TodoItem = ({ data }) => {
  return (
    <div>
      <Items data={data}></Items>
    </div>
  );
};

export default TodoItem;
