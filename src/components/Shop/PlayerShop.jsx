import React from 'react';
import ShopItem from './ShopItem';

const PlayerShop = ({
  items,
  money,
  SELLERS,
  PRICE_MULTIPLAYERS,
  transferItemHandler,
}) => {
  return (
    <section id="player_eq" className="mt-3 mt-sm-0">
      <div className="shop_keeper_eq-titleSpace">
        <h1>Player</h1>
        <p>What you got in stock?</p>
      </div>
      <div className="shop_keeper_eq-itemsSpace">
        <p>Cash: {money}</p>
        <ul>
          {items.map((item, id) => (
            <ShopItem
              key={id}
              id={id}
              item={item}
              priceMultiplayer={PRICE_MULTIPLAYERS.PLAYER}
              seller={SELLERS.PLAYER}
              transferItemHandler={transferItemHandler}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayerShop;
