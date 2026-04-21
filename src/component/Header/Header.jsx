import "./Header.css";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navgiation = useNavigate()

  return (
    <header className="header">
      {/* Top Header */}
      <div className="top-header">
        <h2 className="logo">ShopKart</h2>

        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>
            <IoSearchOutline />
          </button>
        </div>

        <div className="header-icons">
          <div className="icon-box">
            <IoPersonOutline />
            <span>Account</span>
          </div>

          <div className="icon-box" onClick={() => navgiation("/cart")}>
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
