
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Crop Tracker</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Dashboard
</NavLink>
        </li>
        <li>
          <NavLink
            to="/crops"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Crops
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crops/add"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Add Crop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;