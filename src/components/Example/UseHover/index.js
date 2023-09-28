import useHover from "../../../hooks/useHover";

const UseHover = () => {
  const [hoverRed, elemRefRed] = useHover();
  const [hoverBlue, elemRefBlue] = useHover();

  return (
    <div>
      <div
        ref={elemRefRed}
        style={{ width: 100, height: 100, border: "3px solid red" }}
      >
        {hoverRed ? "Hovering" : "Not hovering"}
      </div>
      <div
        ref={elemRefBlue}
        style={{ width: 100, height: 100, border: "3px solid blue" }}
      >
        {hoverBlue ? "Hovering" : "Not hovering"}
      </div>
    </div>
  );
};

export default UseHover;
