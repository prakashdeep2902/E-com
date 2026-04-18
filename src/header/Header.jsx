import { IoBagOutline, IoSearch } from "react-icons/io5";
import "./Header.css";
import { useEffect, useState } from "react";
const Header = ({ response }) => {
  const [input, SetInput] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (response?.products) {
      setFilter(response.products);
    }
  }, [response]);

  const handelSearchList = (e) => {
    const InputValue = e.target.value;
  };
  return (
    <div className="Header">
      <nav className="navBar">
        <div className="logo">
          <img src="./online-shop.png" alt="" />
        </div>

        <div className="InputCom">
          <div className="SearchIcons">
            <IoSearch />
          </div>

          <input
            type="text"
            value={input}
            onChange={handelSearchList}
            placeholder="Search for Products and More"
          />

          <div
            className="showSearchItem"
            style={{
              display: input.length > 3 ? "block" : "none",
            }}
          >
            <ul className="searchList">
              <li>jeans</li>
              <li>kurti</li>
              <li>top</li>
              <li>tshirt</li>
              <li>shirt</li>
            </ul>
          </div>
        </div>

        <div className="cart">
          <IoBagOutline
            style={{
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
