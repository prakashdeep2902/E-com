import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }


  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ApiContext.Provider value={{ products, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
