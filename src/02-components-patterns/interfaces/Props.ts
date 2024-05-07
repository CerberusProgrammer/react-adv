import { ReactElement } from "react";
import { Product } from "./Product";

export interface ShoppingPageProps {
  product: Product;
  children: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
