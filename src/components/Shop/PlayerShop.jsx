import React from 'react';

const PlayerShop = ({ items, transferItemHandler }) => {
  const transferItem = item => {
    transferItemHandler(item, 'player');
  };
  return (
    <section id="player_eq">
      <div className="shop_keeper_eq-titleSpace">
        <h1>Player</h1>
        <p>What you got in stock?</p>
      </div>
      <div className="shop_keeper_eq-itemsSpace">
        <ul>
          {items.map((item, id) => (
            <li key={id} id={id} onClick={() => transferItem(item)}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayerShop;
