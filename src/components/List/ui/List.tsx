import type { FC } from "react";

import style from "./List.module.css";
import type { TItem } from "../../../shared/types/types";
import { Item } from "../../Item";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { Cart } from "../../Cart";
import { showCart } from "../../../shared/store/cartSlice";

const items: TItem[] = [
  { id: "001", name: "Item 1", price: 100 },
  { id: "002", name: "Item 2", price: 200 },
  { id: "003", name: "Item 3", price: 300 },
  { id: "004", name: "Item 4", price: 400 },
  { id: "005", name: "Item 5", price: 500 },
  { id: "006", name: "Item 6", price: 600 },
  { id: "007", name: "Item 7", price: 700 },
  { id: "008", name: "Item 8", price: 800 },
];

const List: FC = () => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector((state) => state.cart.isShown);

  return (
    <>
      {isShown && <Cart />}
      <button className={style.Button} onClick={() => dispatch(showCart())}>
        Cart
      </button>
      <div className={style.List}>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default List;
