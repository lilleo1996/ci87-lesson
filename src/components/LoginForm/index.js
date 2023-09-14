import { useState } from "react";

import "./style.css";
const LoginForm = () => {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Logged in successfully");
    // check data
    // format data
    // call API
    setUser({ name: "", password: "" });
  };

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label>
        YourEmail
        <input type="text" value={user.name} onChange={handleNameChange} />
      </label>

      <br />
      <label>
        Password
        <input
          type="password"
          value={user.password}
          onChange={handlePasswordChange}
        />
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
