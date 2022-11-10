import React from 'react';

const Shopkeeper = ({ items, transferItemHandler }) => {
  const transferItem = item => {
    transferItemHandler(item, 'shopkeeper');
  };
  return (
    <section id="shop_keeper_eq">
      <div className="shop_keeper_eq-titleSpace">
        <h1>Shop keeper</h1>
        <p>Care to do some trade?</p>
      </div>
      <div className="shop_keeper_eq-itemsSpace">
        <ul>
          {items.map((item, id) => (
            <li key={item.id} id={id} onClick={() => transferItem(item)}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shopkeeper;
