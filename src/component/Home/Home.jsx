import "./Home.css";
import { FaStar } from "react-icons/fa";
import { ApiContext } from "../../context/APiContext";
import { useContext, useState } from "react";
import { useCart } from "../../context/CartContext";
import { convertTorupess } from "../../utils";
const Home = () => {

  const { products, loading } = useContext(ApiContext)
  const Products = products?.products
  const [addedId, setAddedId] = useState(null);
  const { addToCart, setCartItems, removeToCart, cartItem } = useCart()

  const categories = Array.from(new Map(Products?.map((value) => [value.category, { categoryName: value.category, url: `/category/${value.category}` }
  ])).values())

  const AllThumbnail = Array.from(new Map(Products?.map((value) => [value.thumbnail, { thumb: value.thumbnail }])).values())

  const handleClick = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };



  return (
    <div className="home-page">
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
          <img src="https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp" alt="banner" />
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          {
            categories && categories.map(({ categoryName, url }) => (
              <a className="cat-box" href={url}>{categoryName}</a>
            ))
          }
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {Products && Products?.map((item) => {
            return <div className="card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <h3>{item.title}</h3>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>₹{convertTorupess(item.price)}</p>

              <button
                className={`cart-btn ${addedId === item.id ? "added" : ""}`}
                onClick={() => handleClick(item)}
              >
                {addedId === item.id ? "✔ Added" : "Add to Cart"}
              </button>
            </div>
          })}
        </div>
      </section>

      <section className="offer-banner">
        <div>
          <h2>Special Offer 50% Off</h2>
          <p>Upgrade your home with stylish products today.</p>
        </div>

        <button>Buy Now</button>
      </section>

      <footer className="footer">
        <p>© 2026 ShopKart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
