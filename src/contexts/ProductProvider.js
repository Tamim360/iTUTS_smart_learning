import React, { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const handleProducts = (product) => {
    const exist = products.includes(product);
    if (!exist) {
      const newProducts = [...products, product];
      setProducts(newProducts);
    }
  };

  return (
    <ProductContext.Provider value={{ products, handleProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
