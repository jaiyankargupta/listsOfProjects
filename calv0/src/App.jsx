import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [addVal, setVal] = useState();
  const buttonHandler = (item) => {
    let result = 0;
    if (item === "C") {
      setVal("");
    } else if (item === "=") {
      result = eval(addVal);
      setVal(result);
    } else {
      const newVal = addVal + item;
      setVal(newVal);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display add={addVal}></Display>
        <ButtonContainer handler={buttonHandler}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
