import React, { useState } from "react";
import "./CartPage.css";
import { useCart } from "../../context/CartContext";
import { convertTorupess } from "../../utils";

export default function CartPage() {
    const { addToCart, setCartItems, removeToCart, cartItems } = useCart()


    const increaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce((sum, curr) => {
        return sum += curr.price
    }, 0);


    return (
        <div className="cart-container">
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-card" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />

                            <div className="cart-details">
                                <h3>{item.title}</h3>
                                <p>₹{convertTorupess(item.price)}</p>

                                <div className="qty-box">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeToCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="summary-box">
                    <h2>Order Summary</h2>
                    <p>Total Items: {cartItems.length}</p>
                    <h3>Total: ₹{convertTorupess(total)}</h3>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}