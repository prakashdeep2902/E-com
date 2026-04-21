import { createContext, useContext, useState } from "react";
export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [numOfCartItems, SetNumOfCartItems] = useState(0)

    const addToCart = ({ id, price, thumbnail, title, quantity = 1 }) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === id)
            if (existingItem) {
                return prev.map((item) => item.id === id ? { ...item, quantity: quantity + 1 } : item)
            }

            return [...prev, { id, price, thumbnail, title, quantity }]
        })

        SetNumOfCartItems((prev) => prev + 1);
    };
    const removeToCart = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id))
        SetNumOfCartItems((prev) => prev - 1)

    }

    return (
        <CartContext.Provider value={{ addToCart, setCartItems, removeToCart, cartItems, numOfCartItems }}>
            {children}
        </CartContext.Provider>
    )

}

