import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, ShoppingPageProps } from "../interfaces/Props";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export default function ProductCard({ children, product }: ShoppingPageProps) {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <Provider
        value={{
          counter,
          increaseBy,
          product,
        }}
      >
        {children}
      </Provider>
    </div>
  );
}
