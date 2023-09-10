import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {
  //     // code here will run after every render
  //     document.title = `${count} time`;
  //   }, [count]);

  //   useEffect(() => {
  //     // code here will run after every render
  //     const handleScroll = () => {
  //       // define function to print position
  //       const position = document.documentElement.scrollTop;
  //       console.log("scrolling position: ", position);
  //     };
  //     document.addEventListener("scroll", handleScroll); // add event with handleScroll
  //     return () => {
  //       // code here will run after every remove component
  //       document.removeEventListener("scroll", handleScroll);
  //     };
  //   });

  //   return (
  //     <div class="example">
  //       <div className="example__counter">
  //         <p>You click {count} time!</p>
  //         <button onClick={() => setCount(count + 1)}>Click</button>
  //       </div>
  //       <div className="excample__paragraph">
  //         {visible && <p>This is hidden content</p>}
  //         <button onClick={() => setVisible(!visible)}>Change visible</button>
  //       </div>
  //     </div>
  //   );

  useEffect(() => {
    const timer = setInterval(() => {
      // side effect
      console.log("update count");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default Example;
