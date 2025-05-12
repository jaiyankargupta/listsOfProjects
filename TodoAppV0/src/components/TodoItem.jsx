import React from "react";
import Items from "./items";
const TodoItem = ({ data, deleteHandler, completeHandler }) => {
  return (
    <div>
      {data.map((item, idx) => (
        <Items
          key={idx}
          title={item.title}
          dueDate={item.date}
          completeVal={item.completeVal}
          deleteHandler={deleteHandler}
          completeHandler={completeHandler}
        ></Items>
      ))}
    </div>
  );
};

export default TodoItem;
