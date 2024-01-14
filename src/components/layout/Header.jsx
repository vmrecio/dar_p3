import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import CartModal from "./CartModal";
const Header = () => {
  const { cart } = useCart();
  const [openModal, setOpenModal] = useState(false);

  const cartIconClickHandler = () => {
    setOpenModal(true);
  };
  const onCloseModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <header className="bg-blue-400 py-16">
      <CartModal open={openModal} onClose={onCloseModalHandler} />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-transform: uppercase">
            <a href="index.html">
              <span className="px-4 py-4 border-solid border-2 border-white bg-white">
                Práctica
              </span>
              <span className="px-4 py-4 border-solid border-2 border-white">
                3
              </span>
            </a>
          </h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <button onClick={cartIconClickHandler}>
                  <CartIcon />
                </button>
                <span className="text-xs px-2 py-1 border-solid border-2 border-white bg-white rounded-full">
                  {cart.length}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
