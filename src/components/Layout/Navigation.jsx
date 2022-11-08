import { NavLink } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid border-bottom border-danger pb-2">
        <ul className="navbar-nav d-flex flex-row ">
          <NavLink className="nav-item px-2" to={'/'}>
            Home
          </NavLink>
          <NavLink className="nav-item px-2" to={'/Adventure'}>
            Adventure
          </NavLink>
          <NavLink className="nav-item px-2" to={'/Arena'}>
            Arena
          </NavLink>
          <NavLink className="nav-item px-2" to={'/Shop'}>
            Shop
          </NavLink>
          <NavLink className="nav-item px-2" to={'/Settings'}>

            Settings
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
