import React from 'react';

const ShopItem = ({ item, priceMultiplayer, seller, transferItemHandler }) => {
  const price = Math.floor(item.price * priceMultiplayer);
  const transferItem = item => {
    transferItemHandler(item, seller, price);
  };

  return (
    <li className="my-2">
      <a className="py-2" href="#" onClick={() => transferItem(item)}>
        <span className="me-3">{item.name}</span>
        <span>${price}</span>
      </a>
    </li>
  );
};

export default ShopItem;
