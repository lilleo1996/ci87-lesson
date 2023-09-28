import { useState, useRef, useEffect } from "react";

const useHover = () => {
  const [hover, setHover] = useState(false);
  const elemRef = useRef(null);

  useEffect(() => {
    const elem = elemRef.current;

    const onMouseEnter = () => {
      setHover(true);
    };

    const onMouseLeave = () => {
      setHover(false);
    };

    elem.addEventListener("mouseenter", onMouseEnter);
    elem.addEventListener("mouseleave", onMouseLeave);

    return () => {
      elem.removeEventListener("mouseenter", onMouseEnter);
      elem.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return [hover, elemRef];
};

export default useHover;
