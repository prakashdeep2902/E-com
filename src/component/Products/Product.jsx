import { useContext, useState } from "react";
import "./Product.css";
import { FaBars, FaGripHorizontal, FaStar } from "react-icons/fa";
import { ApiContext } from "../../context/APiContext";
import { convertTorupess, findOutAllCategory } from "../../utils";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { products, loading } = useContext(ApiContext);
  const [isChecked, setIsChecked] = useState(false);
  const Products = products?.products;
  const Brands = Array.from(
    new Map(
      Products?.map((product) => [product.brand, { brand: product.brand, id: product.id }]),
    ).values(),
  );

  const RealatedCategory = findOutAllCategory(Products)

  const HandelBrandFilter = (e) => {
    setIsChecked(!isChecked);

  }


  const navigation = useNavigate()

  return (
    <div className="product-page">

      <aside className="sidebar">
        <p className="breadcrumb">Home / Category / Items</p>

        <div className="filter-box">
          <h4>Related Category</h4>
          <ul>
            {
              RealatedCategory && RealatedCategory.map(({ category, id }) => {
                return <li key={id}>{category}</li>
              })
            }
          </ul>
        </div>

        <div className="filter-box">
          <h4>Brands</h4>
          {Brands &&
            Brands.map(({ brand, id }) => {
              if (brand == undefined) {
                return "";
              }
              return (
                <label key={id}>
                  <input type="checkbox" checked={isChecked} onChange={HandelBrandFilter} />
                  {brand}
                </label>
              );
            })}
        </div>

        <div className="filter-box">
          <h4>Price Range</h4>
          <input type="range" />
          <div className="price-inputs">
            <input type="text" placeholder="₹ 0" />
            <input type="text" placeholder="₹ 9999" />
          </div>
          <button>Apply</button>
        </div>

      </aside>

      <main className="products-section">
        <div className="top-bar">
          <p>
            {Products?.length} items
          </p>

          <div className="top-actions">
            <label>
              <input type="checkbox" /> Verified only
            </label>

            <select>
              <option>Best Match</option>
              <option>Low Price</option>
              <option>High Price</option>
            </select>

            <button>
              <FaBars />
            </button>

            <button>
              <FaGripHorizontal />
            </button>
          </div>
        </div>

        <div className="product-grid" >
          {Products?.map((item) => (
            <div className="card" key={item.id} onClick={() => navigation(`/${item.id}`)}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>₹{convertTorupess(item.price)}</h3>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
