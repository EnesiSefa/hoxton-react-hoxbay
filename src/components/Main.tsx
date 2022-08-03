import { Route, Routes } from "react-router-dom";
export default function Main({ product }) {
  return (
    <main>
      <ul className="products-container">
        <li className="products-container__list">
          <img src={product.image} alt="" />
          <p>{product.title}</p>
        </li>
      </ul>
      {/* Create your routes here. Don't forget to install the router package! */}
    </main>
  );
}
