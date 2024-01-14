import { useCatalog } from "../../contexts/CatalogContext";
import ProductCard from "./ProductCard";
import { useCart } from "../../contexts/CartContext";

const CatalogList = () => {
  const { catalog } = useCatalog();
  const { addToCart } = useCart();

  const productCardAddToCartHandler = (product) => {
    addToCart(product)
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {catalog.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={productCardAddToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogList;
