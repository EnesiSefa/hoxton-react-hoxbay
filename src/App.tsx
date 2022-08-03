import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/Products")
      .then((response) => response.json())
      .then((productsFromServer) => setProduct(productsFromServer));
  }, []);
  return (
    <>
      <Header />
      <Main products={product} />
    </>
  );
}

export default App;
