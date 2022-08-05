import { useEffect, useState } from "react";

export function Basket() {
  const [basket, setbasket] = useState([])
  useEffect
  return (
    <div className="basket-container">
      <h1>Your Basket</h1>
      <ul>
        <li>
          <img src="" alt="" />
          <h2></h2>
          <label htmlFor="">
            <option value=""></option>
          </label>
        </li>
      </ul>
      <h3>Your total: $ </h3>
    </div>
  );
}
