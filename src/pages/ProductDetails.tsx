import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export default function ProductDetails() {
  const [item, setItem] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((Response) => Response.json())
      .then((itemsFromServer) => setItem(itemsFromServer));
  }, []);
  return (
    <>
      <div className="product-detail">
        <img src="" alt="" />
      </div>
      <div className="product-detail__side">
        {" "}
        <h2>{params.title}</h2>
        <p></p>
        <span></span>
        <button>Add to basket</button>
      </div>
    </>
  );
}
