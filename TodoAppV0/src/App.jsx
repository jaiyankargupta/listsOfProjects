import TodoItems from "./components/TodoItem";
import Error from "./components/Error";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
function App() {
  const [add, setAdd] = useState([]);

  const handleNewItem = (itemName, itemdueDate, completeVal) => {
    setAdd((newVal) => [
      ...newVal,
      { title: itemName, date: itemdueDate, completeVal: completeVal },
    ]);
  };

  const deleteHandler = (deletVal) => {
    const newVal = add.filter((item) => item.title !== deletVal);
    setAdd(newVal);
  };

  const completeHandler = (compVal) => {
    const newVal = add.map((item) =>
      item.title === compVal
        ? { ...item, completeVal: !item.completeVal }
        : item
    );
    setAdd(newVal);
  };

  return (
    <>
      <h1>Todo App</h1>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {add.length === 0 && <Error />}
      <TodoItems
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        data={add}
      ></TodoItems>
    </>
  );
}

export default App;
