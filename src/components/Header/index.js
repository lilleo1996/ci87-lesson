import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  const linkClassName = (params) => {
    return `header__link ${params.isActive ? "header__link--active" : ""}`;
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/pokemon">
            Pokemon
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
