import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { FaBars, FaGripHorizontal, FaStar } from "react-icons/fa";
import { ApiContext } from "../../context/APiContext";
import { convertTorupess, findOutAllCategory } from "../../utils";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { products, loading } = useContext(ApiContext);
  const [Products, setProducts] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [catProduct, setCatProduct] = useState([])
  const navigation = useNavigate()
  const { cateName } = useParams()

  useEffect(() => {
    if (cateName) {
      const FilterProductWithCatName = Products?.filter((pro) => pro.category == cateName)
      setProducts(FilterProductWithCatName)
    }
    else {
      setProducts(products?.product)
    }
  }, [])

  const Brands = Array.from(
    new Map(
      Products?.map((product) => [product.brand, { brand: product.brand, id: product.id }]),
    ).values(),
  );



  const RealatedCategory = findOutAllCategory(Products)





  return (
    <div className="product-page">
      <p className="breadcrumb">  {cateName ? `Home / Category / ${cateName}` : "Home / All Product"}</p>
      <aside className="sidebar">
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
            })
          }
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
            <div className="card" key={item.id} onClick={() => navigation(`/product/${item.id}`)}>
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
