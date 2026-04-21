import Product from "./component/Products/Product";
import Header from "./component/Header/Header";
import ThemeContextProvider from "./context/ThemContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { Apifetch } from "./helper/Apifetch";
import ApiProvider from "./context/APiContext";
import CartPage from "./component/cart/CartPage";
import { CartProvider } from "./context/CartContext";
import SingleProduct from "./component/singleproduct/SingleProduct";

const App = () => {
  return (
    <CartProvider>
      <ApiProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="product/:id" element={<SingleProduct />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </ApiProvider>
    </CartProvider>
  );
};

export default App;
