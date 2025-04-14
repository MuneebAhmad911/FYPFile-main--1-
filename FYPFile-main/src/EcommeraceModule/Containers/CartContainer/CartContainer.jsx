import React from "react";
import { products } from "../../../constants/Products";
import CartComponent from "../../Components/CartComponent/CartComponent";
function CartContainer() {
const cartItems = [products[0], products[1], products[2]];
  return (
    <>
      <CartComponent initialCartItems={cartItems} />
    </>
  );
}

export default CartContainer;
