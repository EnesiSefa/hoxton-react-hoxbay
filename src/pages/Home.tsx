import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";

type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export  function Home() {
  const [products, setProducts] = useState<StoreItem[]>([]);
  const params = useParams()
  

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <div className="products-container" >
      <ul className="products-container__list">
      <ProductList products ={products} onClick={()=>{
        
      }}/>
      </ul>
    </div>
  );
}


// {products.map((item) => (
//   <li className="product-item" >
//     <Link to={`/products/${item.id}`}>
//       <img src={item.image} />
//       <p>{item.title}</p>
//     </Link>
//   </li>
// ))}
