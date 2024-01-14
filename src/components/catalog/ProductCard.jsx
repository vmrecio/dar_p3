import Button from "../common/Button";
import Card from "../common/Card";
import StarRating from "../common/StarRating";

const ProductCard = ({ product, addToCart }) => {

  const { name, price, currency, rating, category } = product

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card>
      <img
        src="https://placeholder.com/356x192"
        alt=""
        className="h-48 w-full object-cover"
      />
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">
          {category}
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {name}
        </a>
        <div className="mt-2 text-slate-500">
          <StarRating rating={rating}/>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="mt-2 text-2xl text-slate-500">
            {price} {currency}
          </p>
          <Button onClick={(handleAddToCart)}>
            Añadir al carrito
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
