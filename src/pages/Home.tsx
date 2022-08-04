import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};
type Props = StoreItem[]


export function Home() {
  const [products, setProducts] = useState<Props>([])
   

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((productsFromServer) => setProducts(productsFromServer))
  }, [])
  
  return (
    
      <div className="products-container">
        <ul className="products-container__list">
        {products.map(product =>(<li className="product-container__list">
      <Link to={`/products/${product.id}`}>
       <img src={product.image} />
       <p>{product.title}</p>
      </Link></li>))}
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
