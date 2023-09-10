import { useState } from "react";

// import NameCard from "./components/NameCard";
// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
// import Hobbies from "./components/Hobbies";
import Example from "./components/Example";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      {isVisible && <Example />}
      <button className="counter-visible-btn" onClick={handleVisible}>
        {isVisible ? "Hide" : "Open"}
      </button>
      {/* <Counter isVisibleCounter={isVisibleCounter} />
      <Counter isVisibleCounter={isVisibleCounter} />
      <button className="counter-visible-btn" onClick={handleVisibleCounter}>
        {isVisibleCounter ? "Hide Counter" : "Open Counter"}
      </button> */}
      {/* <div className="namecard-container">
        <NameCard name="Alice" age="20" gender="Female" />
        <NameCard name="Bob" age="19" gender="Male" />
        <NameCard name="Hieu" age="18" gender="Male" />
      </div> */}
      {/* <TodoList /> */}
      {/* <Hobbies /> */}
    </div>
  );
};

export default App;
