import ErrorMsg from "./components/errorMsg";
import ItemsLists from "./components/itemsLists";

function App() {
  let foodItems = ["hello"];

  return (
    <>
      <h1>Food App</h1>
      <ErrorMsg list={foodItems} />
      <ItemsLists list={foodItems} />
    </>
  );
}

export default App;
