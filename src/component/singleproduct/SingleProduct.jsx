import React, { useContext } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/APiContext";
import { convertTorupess } from "../../utils";

const SingleProduct = () => {
    const { id } = useParams()
    const { products, loading } = useContext(ApiContext);
    const Products = products?.products;
    const Product = Products?.find((val) => val.id == id)
    const Image = Product?.images





    return (
        <div className="single-product">
            <div className="product-container">
                <div className="product-image">


                    <img src={Image} alt={Product?.title} />
                </div>

                <div className="product-details">
                    <h1>{Product?.title}</h1>
                    <p className="rating">⭐ {Product?.rating}</p>
                    <h2>₹{convertTorupess(Product?.price)}</h2>
                    <p className="desc">{Product?.description}</p>
                    <p className="stock">
                        {Product?.stock > 0 ? "In Stock" : "Out of Stock"}
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