import "./Product.css";
import { FaBars, FaGripHorizontal, FaStar } from "react-icons/fa";

const Product = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/220x180",
      price: "$390.00",
      rating: "3.5",
      title: "Office chair soft material yellow color",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/220x180",
      price: "$176.00",
      rating: "5.0",
      title: "Modern premium chair latest design",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/220x180",
      price: "$998.95",
      rating: "4.5",
      title: "Ceramic jug for kitchen medium size",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/220x180",
      price: "$68.99",
      rating: "3.2",
      title: "Interior plant natural with vase",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/220x180",
      price: "$498.95",
      rating: "4.7",
      title: "Airbed blue color with pump",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/220x180",
      price: "$98.95",
      rating: "4.2",
      title: "Magazine holder leather style",
    },
  ];

  return (
    <div className="product-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <p className="breadcrumb">Home / Category / Items</p>

        <div className="filter-box">
          <h4>Related Category</h4>
          <ul>
            <li>Equipments</li>
            <li>Home Items</li>
            <li>TV Sets</li>
            <li>Smartphones</li>
            <li>Microchips</li>
          </ul>
        </div>

        <div className="filter-box">
          <h4>Brands</h4>
          <label>
            <input type="checkbox" /> Panasonic
          </label>
          <label>
            <input type="checkbox" /> Apple
          </label>
          <label>
            <input type="checkbox" /> Samsung
          </label>
          <label>
            <input type="checkbox" /> Xiaomi
          </label>
        </div>

        <div className="filter-box">
          <h4>Price Range</h4>
          <input type="range" />
          <div className="price-inputs">
            <input type="text" placeholder="$0" />
            <input type="text" placeholder="$9999" />
          </div>
          <button>Apply</button>
        </div>

        <div className="filter-box">
          <h4>Condition</h4>
          <label>
            <input type="radio" name="condition" /> Any
          </label>
          <label>
            <input type="radio" name="condition" /> Refurbished
          </label>
          <label>
            <input type="radio" name="condition" /> Damaged
          </label>
          <label>
            <input type="radio" name="condition" /> Brand New
          </label>
        </div>
      </aside>

      {/* Products */}
      <main className="products-section">
        <div className="top-bar">
          <p>
            12,911 items in <strong>Equipments</strong>
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

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <h3>{item.price}</h3>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>{item.rating}</span>
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
