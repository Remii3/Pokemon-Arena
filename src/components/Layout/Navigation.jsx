import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <NavLink className="nav-item" to={'/'}>
            Home
          </NavLink>
          <NavLink className="nav-item" to={'/Adventure'}>
            Adventure
          </NavLink>
          <NavLink className="nav-item" to={'/Arena'}>
            Arena
          </NavLink>
          <NavLink className="nav-item" to={'/Shop'}>
            Shop
          </NavLink>
          <NavLink className="nav-item" to={'/Settings'}>
            Settings
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
