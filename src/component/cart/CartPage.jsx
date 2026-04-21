import React, { useState } from "react";
import "./CartPage.css";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 1299,
            qty: 1,
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        },
        {
            id: 2,
            name: "Nike Shoes",
            price: 199,
            qty: 2,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        },
    ]);

    const increaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div className="cart-container">
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-card" key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>

                                <div className="qty-box">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(item.id)}
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
                    <h3>Total: ${total}</h3>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}