import React from "react";

import { useRef } from "react";

const AddTodo = ({ onNewItem }) => {
  const enterData = useRef();
  const enterDate = useRef();

  const handleAddClick = (e) => {
    e.preventDefault();
    const InputItem = enterData.current.value;
    const dateData = enterDate.current.value;
    enterData.current.value = "";
    enterDate.current.value = "";
    onNewItem(InputItem, dateData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleAddClick}>
          <div>
            <input type="text" placeholder="Enter your text" ref={enterData} />
          </div>
          <div>
            <input type="date" ref={enterDate} />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
