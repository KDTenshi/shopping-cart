import type { FC } from "react";

import style from "./Item.module.css";
import type { TItem } from "../../../shared/types/types";
import { useAppDispatch } from "../../../app/store/appStore";
import { addToCart } from "../../../shared/store/cartSlice";

interface ItemProps {
  item: TItem;
}

const Item: FC<ItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.Item}>
      <p className={style.Name}>{item.name}</p>
      <p className={style.Price}>{item.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      <button className={style.Button} onClick={() => dispatch(addToCart({ item }))}>
        Add to cart
      </button>
    </div>
  );
};

export default Item;
