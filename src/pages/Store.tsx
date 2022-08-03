import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type StoreItem = {
  id: number;
  title: string;
  image: string;
};

export function Store() {
  const [products, setProducts] = useState<StoreItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <div>
    

      <ul className="store-list">
        {products.map((item) => (
          <li className="store-item">
            <Link to={`/products/${item.id}`}>
              <img src={item.image} />
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
