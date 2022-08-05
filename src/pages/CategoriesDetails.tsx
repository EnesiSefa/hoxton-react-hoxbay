
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};
type Props = StoreItem[];

export default function CategoriesDetails () {
  const [products, setProducts] = useState<Props>([]);
 

  useEffect(() => {
    fetch(`http://localhost:4000/products/`)
      .then((response) => response.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  


  return (
    <div className="products-container">
      <ul className="products-container__list">
        {products.map((product) => (
          <li key={product.categoryId} className="product-container__list">
            <Link to={`/products/${product.categoryId}`}>
              <img src={product.image} />
              <p>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





















// import { useEffect, useState } from "react";
// import { Link, Navigate, useParams } from "react-router-dom";
// type StoreItem = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   categoryId: number;
//   image: string;
// };

// export default function CategoriesDetails() {
//   const [items, setItem] = useState<StoreItem | null>(null);
//   const params = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:4000/categories/${params.Id}`)
//       .then((Response) => Response.json())
//       .then((itemsFromServer) => setItem(itemsFromServer));
//   }, []);

//   if (items === null)
//     return (
//       <>
//         <h1>Loading...</h1>
//       </>
//     );
//   if (items === undefined) return <Navigate to={"/home"} />;
//   return (
//     <>
//       <div className="products-container">
//         <ul className="products-container__list">
//           <li key={items.id} className="product-container__list">
//             <Link to={`/categories/${items.id}`}>
//               <img src={items.image} />
//               <p>{items.title}</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }
