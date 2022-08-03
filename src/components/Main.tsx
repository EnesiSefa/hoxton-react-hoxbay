import { Route, Routes } from "react-router-dom";
import { Basket } from "../pages/Basket";
import { Home } from "../pages/home";
import { Categories } from "../pages/Categories";
import { PageNotFound } from "../pages/PageNotFound";
export default function Main({ product }) {
  return (
    <main>
      <ul className="products-container">
        <li className="products-container__list">
          <img src={product.image} alt="" />
          <p>{product.title}</p>
        </li>
      </ul>
      <Routes>
        {/* Only show up on the right url */}
        <Route path="/home" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* Create your routes here. Don't forget to install the router package! */}
    </main>
  );
}
