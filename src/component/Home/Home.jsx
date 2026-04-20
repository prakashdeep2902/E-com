import "./Home.css";
import { FaStar } from "react-icons/fa";
const Home = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/250x220",
      title: "Modern Chair",
      price: "$120",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/250x220",
      title: "Wireless Headphone",
      price: "$85",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/250x220",
      title: "Premium Lamp",
      price: "$60",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/250x220",
      title: "Gaming Keyboard",
      price: "$95",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Best Products For Your Lifestyle</h1>
          <p>
            Discover premium furniture, gadgets and modern accessories with
            amazing discounts.
          </p>

          <button>Shop Now</button>
        </div>

        <div className="hero-right">
          <img src="https://via.placeholder.com/520x350" alt="banner" />
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="cat-box">Furniture</div>
          <div className="cat-box">Electronics</div>
          <div className="cat-box">Fashion</div>
          <div className="cat-box">Home Decor</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>{item.price}</p>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="offer-banner">
        <div>
          <h2>Special Offer 50% Off</h2>
          <p>Upgrade your home with stylish products today.</p>
        </div>

        <button>Buy Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ShopKart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
