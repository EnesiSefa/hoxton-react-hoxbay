import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Categories = {
  id: number;
  name: string;
};

export function Categories() {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((productsFromServer) => setCategories(productsFromServer));
  }, []);

  return (
    <div className="categories-container">
      <ul className="categories-container__list">
        {categories.map((item) => (
          <li >
            <Link to={`/products/${item.id}`}>
              <h1>{item.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
