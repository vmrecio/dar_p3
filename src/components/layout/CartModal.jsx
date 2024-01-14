import Modal from "../common/Modal";
import { useCart } from "../../contexts/CartContext";
import { CloseIcon } from "../icons";

const CartModal = ({ open, onClose }) => {
  const { cart, clearCart } = useCart();

  const groupCartProducts = (cartProducts) => {
    const groupedProducts = {};

    cartProducts.forEach((product) => {
      if (!groupedProducts[product.id]) {
        groupedProducts[product.id] = { ...product, count: 1 };
      } else {
        groupedProducts[product.id].count++;
      }
    });

    return Object.values(groupedProducts);
  };

  const groupedCartProducts = groupCartProducts(cart);

  return (
    <Modal open={open}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:text-right">
                  <button onClick={onClose}>
                    <CloseIcon />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Aquí tienes tu carrito
                    </h3>
                    <div className="mt-2">
                      {/* Lista de productos en el carrito */}
                      {groupedCartProducts.length === 0 ? (
                        <p className="text-sm text-gray-500">
                          Tu carrito está vacío.
                        </p>
                      ) : (
                        <ul className="text-sm text-gray-500">
                          {groupedCartProducts.map((product, index) => (
                            <li key={index} className="my-2">
                              {product.count} {product.name} - ({product.count}{" "}
                              x {product.price}€)
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  disabled={groupedCartProducts.length === 0}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Comprar
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
