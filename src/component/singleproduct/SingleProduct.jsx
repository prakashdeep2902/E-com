import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";

const SingleProduct = () => {


    const { id } = useParams()

    console.log(id)

    const product = {
        id: 1,
        title: "iPhone 15 Pro",
        price: 129999,
        description:
            "Powerful smartphone with titanium body, A17 Pro chip, amazing camera, and smooth performance.",
        image:
            "https://i.dummyjson.com/data/products/1/1.jpg",
        rating: 4.8,
        stock: 12,
    };

    return (
        <div className="single-product">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="product-details">
                    <h1>{product.title}</h1>
                    <p className="rating">⭐ {product.rating}</p>
                    <h2>₹{product.price}</h2>
                    <p className="desc">{product.description}</p>
                    <p className="stock">
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>

                    <div className="buttons">
                        <button className="cart-btn">Add to Cart</button>
                        <button className="buy-btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;