import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { Product } from "../interfaces/Product";

const product: Product = {
  id: "string",
  title: "string",
};

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Page</h1>

      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
