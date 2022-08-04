import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export default function ProductDetails() {
  const [item, setItem] = useState<StoreItem | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((Response) => Response.json())
      .then((itemsFromServer) => setItem(itemsFromServer));
  }, []);

  if (item === null)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  if (item === undefined) return <Navigate to={"/products"} />;
  return (
    <>
      <div className="product-detail">
        <img src="" alt="" />
      </div>
      <div className="product-detail__side">
        {" "}
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <button>Add to basket</button>
      </div>
    </>
  );
}
