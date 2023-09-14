import { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";
import LoginForm from "../LoginForm";
import "./style.css";

const Login = () => {
  const themeContext = useContext(ThemeContext);

  const loginClassName = `login ${
    themeContext.theme === "light" ? "login--light" : "login--dark"
  }`;

  return (
    <div className={loginClassName}>
      <LoginForm />
    </div>
  );
};

export default Login;
