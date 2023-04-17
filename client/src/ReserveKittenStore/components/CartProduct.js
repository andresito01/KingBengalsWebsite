import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h3>{productData.kittenName}</h3>
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
            src={productData.kittenPicture}
          />
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default CartProduct;
