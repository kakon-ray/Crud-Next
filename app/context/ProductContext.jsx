
"use client";

import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://192.168.5.239:8000/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data.product));
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};