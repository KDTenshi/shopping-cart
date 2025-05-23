import type { FC } from "react";

import style from "./CartItem.module.css";
import type { TCartItem } from "../../../shared/types/types";
import { useAppDispatch } from "../../../app/store/appStore";
import { decreaseItemCount, deleteItem, increaseItemCount } from "../../../shared/store/cartSlice";

interface CartItemProps {
  item: TCartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.Item}>
      <div className={style.Info}>
        <p className={style.Name}>{item.item.name}</p>
        <p className={style.Price}>{item.item.price}</p>
      </div>
      <div className={style.Controls}>
        <button className={style.Button} onClick={() => dispatch(decreaseItemCount({ id: item.item.id }))}>
          -
        </button>
        <p className={style.Count}>{item.count}</p>
        <button className={style.Button} onClick={() => dispatch(increaseItemCount({ id: item.item.id }))}>
          +
        </button>
        <button className={style.Button} onClick={() => dispatch(deleteItem({ id: item.item.id }))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
