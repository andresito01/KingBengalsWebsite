import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { KittensData } from "../../admin/context/KittensContext.jsx";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const { findKitten } = KittensData();
  const productData = findKitten(id);

  return (
    <>
      <div style={{ display: "flex" }} id="test4.3cartitems">
        <div>
          <h3>{productData.info.name}</h3>
          <p>{quantity} total</p>
          <p>${(quantity * productData.info.reservePrice).toFixed(2)}</p>
          <Button size="sm" onClick={() => cart.deleteFromCart(id)} id="test4.3cartremove">
            Remove
          </Button>
        </div>
        <div>
          <img
            alt="availableKitten"
            style={{ height: "auto", width: "100%", scale: "0.6" }}
            src={productData.info.picture}
          />
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default CartProduct;
