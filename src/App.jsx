import Header from "./components/layout/Header";
import Catalog from "./components/catalog/Catalog";
import { CartProvider } from "./contexts/CartContext";

const App = () => {

  return (
    <CartProvider>
      <Header />
      <Catalog />
    </CartProvider>
  );
};

export default App;
