import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { PageNotFound } from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        {/* Only show up on the right url */}
        <Route path="/home/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
