import React, { useState } from 'react';
import Shopkeeper from '../components/Shop/Shopkeeper';
import PlayerShop from '../components/Shop/PlayerShop';
const ShopPage = () => {
  const [shopKeeperItems, setShopKeeperItems] = useState([
    { id: 1, name: 'knife' },
    { id: 2, name: 'sword' },
    { id: 3, name: 'bow' },
    { id: 4, name: 'torch' },
  ]);

  const [playerItems, setPlayerItems] = useState([]);

  const transferItemHandler = (item, seller) => {
    if (seller === 'shopkeeper') {
      const arrayIndex = shopKeeperItems.indexOf(item);

      setShopKeeperItems(prevState => [
        ...prevState.slice(0, arrayIndex),
        ...prevState.slice(arrayIndex + 1),
      ]);
      setPlayerItems(prevState => [...prevState, item]);
    } else if (seller === 'player') {
      const arrayIndex = playerItems.indexOf(item);

      setPlayerItems(prevState => [
        ...prevState.slice(0, arrayIndex),
        ...prevState.slice(arrayIndex + 1),
      ]);
      setShopKeeperItems(prevState => [...prevState, item]);
    }
  };
  console.log(playerItems);
  return (
    <div className="d-flex justify-content-evenly mt-5">
      <Shopkeeper
        items={shopKeeperItems}
        transferItemHandler={transferItemHandler}
      />
      <PlayerShop
        items={playerItems}
        transferItemHandler={transferItemHandler}
      />
    </div>
  );
};

export default ShopPage;
