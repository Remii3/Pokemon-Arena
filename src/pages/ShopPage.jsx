import React, { useState } from 'react';
import Shopkeeper from '../components/Shop/Shopkeeper';
import PlayerShop from '../components/Shop/PlayerShop';

import { useSelector, useDispatch } from 'react-redux';
import {
  decrementMoney,
  incrementMoney,
} from '../features/moneyReducer/playerDataSlice';
import {
  decrementShopkeeperMoney,
  incrementShopkeeperMoney,
} from '../features/moneyReducer/shopkeeperDataSlice';

const ShopPage = () => {
  const playerMoney = useSelector(state => state.playerData.money);
  const shopkeeperMoney = useSelector(state => state.shopkeeperData.money);
  const dispatch = useDispatch();

  const [shopKeeperItems, setShopKeeperItems] = useState([
    { id: 1, name: 'knife', price: 5 },
    { id: 2, name: 'sword', price: 51 },
    { id: 3, name: 'bow', price: 15 },
    { id: 4, name: 'torch', price: 32 },
  ]);
  const [playerItems, setPlayerItems] = useState([]);

  const SELLERS = { SHOPKEEPER: 'shopkeeper', PLAYER: 'player' };
  const PRICE_MULTIPLAYERS = { SHOPKEEPER: 1, PLAYER: 0.9 };

  const transferItemHandler = (item, seller, price) => {
    if (seller === 'shopkeeper') {
      if (price <= playerMoney) {
        const arrayIndex = shopKeeperItems.indexOf(item);

        setShopKeeperItems(prevState => [
          ...prevState.slice(0, arrayIndex),
          ...prevState.slice(arrayIndex + 1),
        ]);
        setPlayerItems(prevState => [...prevState, item]);

        dispatch(decrementMoney(price));
        dispatch(incrementShopkeeperMoney(price));
      } else {
        alert("You don't have enough money");
      }
    } else if (seller === 'player') {
      if (price <= shopkeeperMoney) {
        const arrayIndex = playerItems.indexOf(item);

        setPlayerItems(prevState => [
          ...prevState.slice(0, arrayIndex),
          ...prevState.slice(arrayIndex + 1),
        ]);
        setShopKeeperItems(prevState => [...prevState, item]);

        dispatch(incrementMoney(price));
        dispatch(decrementShopkeeperMoney(price));
      } else {
        alert("Shopkeeper doesn't have enough money");
      }
    }
  };
  return (
    <div className="d-flex justify-content-evenly align-items-center align-items-sm-start flex-column flex-sm-row mt-5">
      <Shopkeeper
        items={shopKeeperItems}
        money={shopkeeperMoney}
        PRICE_MULTIPLAYERS={PRICE_MULTIPLAYERS}
        SELLERS={SELLERS}
        transferItemHandler={transferItemHandler}
      />
      <PlayerShop
        items={playerItems}
        money={playerMoney}
        PRICE_MULTIPLAYERS={PRICE_MULTIPLAYERS}
        SELLERS={SELLERS}
        transferItemHandler={transferItemHandler}
      />
    </div>
  );
};

export default ShopPage;
