export type TItem = {
  id: string;
  name: string;
  price: number;
};

export type TCartItem = {
  item: TItem;
  count: number;
};
