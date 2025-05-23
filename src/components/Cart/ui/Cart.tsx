import type { FC } from "react";

import style from "./Cart.module.css";
import { CartItem } from "../../CartItem";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { hideCart } from "../../../shared/store/cartSlice";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => (sum += item.count * item.item.price), 0);

  return (
    <div className={style.Popup}>
      <div className={style.Cart}>
        <button className={style.Button} onClick={() => dispatch(hideCart())}>
          Close
        </button>
        <h2 className={style.Title}>Shopping cart</h2>
        <div className={style.Container}>
          {items.map((item) => (
            <CartItem item={item} key={item.item.id} />
          ))}
        </div>
        <p className={style.Total}>Total: {total}</p>
      </div>
    </div>
  );
};

export default Cart;
