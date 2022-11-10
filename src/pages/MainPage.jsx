import React from 'react';
import { NavLink } from 'react-router-dom';

import adventureJpg from '../assets/adventure.jpg';
import arenaJpg from '../assets/arena.jpg';
import shopJpg from '../assets/shop.png';

const MainPage = () => {
  const importantLinks = [
    { title: 'Adventure', img: adventureJpg },
    { title: 'Arena', img: arenaJpg },
    { title: 'Shop', img: shopJpg },
  ];
  return (
    <>
      <div className="bg-custom-red text-center mt-5">
        <h1 className="py-1 text-custom-white ">
          Welcome to the city far traveler
        </h1>
      </div>
      <div className="mainPage_card-container mx-auto mt-5 d-flex flex-md-row flex-column align-items-center justify-content-center">
        {importantLinks.map((link, id) => (
          <div
            key={id}
            id={id}
            className="card h-100 mx-2 mt-3 mainPage_card border-0"
          >
            <NavLink to={`/${link.title}`} className="w-100">
              <div className="card-img-top bg-black">
                <img src={link.img} alt="frame" className="w-100 rounded-top" />
              </div>
              <div className="card-body">{link.title}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
