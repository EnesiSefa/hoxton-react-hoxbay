import { Link } from "react-router-dom";

type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function ProductList({ products }: StoreItem) {
  return (
    <li className="product-container__list">
      <Link to={`/products/${products.id}`}>
        <img src={products.image} />
        <p>{products.title}</p>
      </Link>
    </li>
  );
}

