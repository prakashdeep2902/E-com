import Product from "./component/Products/Product";
import Header from "./component/Header/Header";
import ThemeContextProvider from "./context/ThemContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

          <Product />
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
};

export default App;
