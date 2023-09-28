import useLocalStorage from "../../../hooks/useLocalStorage";

const UseLocalStorage = () => {
  const [count, setCount] = useLocalStorage("count");

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default UseLocalStorage;
