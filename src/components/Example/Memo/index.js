import { useState, memo } from "react";

export default function App() {
  const [value, setValue] = useState({ name: "MindX", age: 20 });

  const updateValue = () => {
    setValue({ name: "MindX", age: 20 });
  };

  const updateName = () => {
    setValue({ ...value, name: value.name + "x" });
  };

  const increaseAge = () => {
    setValue({ ...value, age: value.age + 1 });
  };

  return (
    <div>
      <div>Check your console</div>
      <button onClick={updateValue}>Change value</button>
      <button onClick={updateName}>Change name</button>
      <button onClick={increaseAge}>Increase age</button>
      <NormalWithMemo name={value.name} age={value.age} />
    </div>
  );
}

const Normal = (props) => {
  console.log("Normal, Re-render");
  return <div>Normal: {props.name + " " + props.age}</div>;
};

const propsAreEquals = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name && prevProps.age === nextProps.age;
};

const NormalWithMemo = memo(Normal, propsAreEquals);
