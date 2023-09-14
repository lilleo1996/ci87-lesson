import { useState } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import ThemeContext from "./contexts/ThemeContext";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Header />
        <Login />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
