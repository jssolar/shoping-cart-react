import { useId } from "react";
import {  CartIcon, ClearCartIcon,  } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckBoxId = useId()
  const { cart, clearCart} = useCart()




  return(
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
        <input type="checkbox" hidden id={cartCheckBoxId} />
        <aside className="cart">
          <ul>
            <li>
              <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
              <div>
                <strong>iPhone</strong> - $1499
              </div>
              <footer>
                <small>
                  Qty: 1
                </small>
                <button>+</button>
              </footer>
            </li>
          </ul>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </aside>
    </>
  )
}