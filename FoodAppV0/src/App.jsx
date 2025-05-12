import ErrorMsg from "./components/errorMsg";
import ItemsLists from "./components/itemsLists";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState([]);
  const [foodItems, setFoodItems] = useState(["hello", "namaste", "pranam"]);
  const handler = (event) => {
    setAdd(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [newFoodItem, ...foodItems];
      setFoodItems(newItem.sort());
      setAdd("");
    }
  };
  return (
    <>
      <Container>
        <h1>Food App</h1>
        <FoodInput handler={handler} add={add}></FoodInput>
        <ErrorMsg list={foodItems} />
        <ItemsLists list={foodItems} />
      </Container>
      <Container>
        <h1>Hello this is my food</h1>
      </Container>
    </>
  );
}

export default App;
