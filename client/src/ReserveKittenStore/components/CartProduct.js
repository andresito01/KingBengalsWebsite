import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const [productData, setProductData] = useState({});

  const getPromisedProductData = async () => {
    let productData = await getProductData(id);
    setProductData(productData);
  };

  useEffect(() => {
    getPromisedProductData();
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h3>{productData.name}</h3>
          <p>{quantity} total</p>
          <p>${(quantity * productData.reservationPrice).toFixed(2)}</p>
          <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
            Remove
          </Button>
        </div>
        <div>
          <img
            alt="availableKitten"
            style={{ height: "auto", width: "100%", scale: "0.6" }}
            src={productData.picture}
          />
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default CartProduct;
