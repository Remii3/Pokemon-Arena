import React from 'react';
import ShopItem from './ShopItem';

const Shopkeeper = ({
  items,
  money,
  SELLERS,
  PRICE_MULTIPLAYERS,
  transferItemHandler,
}) => {
  return (
    <section id="shop_keeper_eq">
      <div className="shop_keeper_eq-titleSpace">
        <h1>Shop keeper</h1>
        <p>Care to do some trade?</p>
      </div>
      <div className="shop_keeper_eq-itemsSpace">
        <p>Cash: {money}</p>
        <ul>
          {items.map((item, id) => (
            <ShopItem
              key={id}
              id={id}
              item={item}
              priceMultiplayer={PRICE_MULTIPLAYERS.SHOPKEEPER}
              seller={SELLERS.SHOPKEEPER}
              transferItemHandler={transferItemHandler}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shopkeeper;
