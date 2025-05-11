import { useState } from "react";

function App() {
  const [add, setAdd] = useState([""]);
  const [addDate, setDate] = useState("");

  const addHandler = (e) => {
    setAdd(e.target.value);
    setDate(e.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>

      <div>
        <div>
          <input type="text" value={add} placeholder="Enter your text" />
        </div>
        <div>
          <input type="date" value={addDate} onChange={setDate} />
        </div>
        <button onClick={addHandler}>Add</button>
        <ul></ul>
      </div>
    </>
  );
}

export default App;
