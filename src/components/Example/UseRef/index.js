import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="use-ref">
      <input ref={inputRef} id="myTxt" type="text" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default UseRef;
