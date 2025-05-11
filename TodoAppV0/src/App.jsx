import TodoItems from "./components/TodoItem";

function App() {
  const data = [
    {
      title: "Buy Milk",
      date: "12/3/2003",
    },
    {
      title: "Go to College",
      date: "12/5/2003",
    },
  ];
  return (
    <>
      <h1>Todo App</h1>

      <div>
        <div>
          <input type="text" placeholder="Enter your text" />
        </div>
        <div>
          <input type="date" />
        </div>
        <button>Add</button>
        <ul></ul>
        <TodoItems data={data}></TodoItems>
      </div>
    </>
  );
}

export default App;
