import "./Header.css";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemContext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ApiContext } from "../../context/APiContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { products, loading } = useContext(ApiContext);
  const { numOfCartItems } = useCart();
  const navgiation = useNavigate();
  const [InputValue, setInputValue] = useState(false);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (products?.products) {
      setProducts(products.products);
    }
  }, [products]);




  const HandelInputSearch = (e) => {
    const Value = e.target.value
    if (Value.length >= 3) {
      const search = Value.toLowerCase();
      const filterProducts = Products?.filter(product =>
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );


      setProducts(filterProducts);
      setInputValue(true)
    }

  };
  return (
    <header className="header">
      <div className="top-header">
        <h2 className="logo">ShopKart</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            onChange={HandelInputSearch}
          />
          <button>
            <IoSearchOutline />
          </button>
          <div
            className="SearchList"
            style={{
              display: InputValue ? "flex" : "none",
            }}
          >
            <ul className="listIteam">
              {Products &&
                Products.map(({ id, title }) => {
                  return <li key={id}>{title}</li>;
                })}
            </ul>
          </div>
        </div>

        <div className="header-icons">
          <div className="icon-box">
            <IoPersonOutline />
            <span>Account</span>
          </div>

          <div className="icon-box" onClick={() => navgiation("/cart")}>
            <div className="NoOfItems">{numOfCartItems}</div>
            <IoCartOutline />
            <span>Cart</span>
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            <span
              className="toggle-circle"
              style={{
                transform:
                  theme === "light" ? "translateX(0)" : "translateX(100%)",
              }}
            >
              {theme && theme === "light" ? <FaMoon /> : <CiSun />}
            </span>
          </button>
        </div>
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
