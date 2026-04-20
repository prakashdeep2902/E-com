import Product from "./component/Products/Product";
import Header from "./component/Header/Header";
import ThemeContextProvider from "./context/ThemContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { Apifetch } from "./helper/Apifetch";
import ApiProvider from "./context/APiContext";

const App = () => {
  return (
    <ApiProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </ApiProvider>
  );
};

export default App;
