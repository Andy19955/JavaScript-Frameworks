import { Product } from "./product";

export interface CartContextInterface {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  clearCart: () => void;
}
