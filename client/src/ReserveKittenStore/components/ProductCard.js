import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

// {kittenAvailableOptions.map((option, index) => {
//             return (
//               <div className={KittenReservationFormCSS.availableKittenRadioOption} key={index}>
//                 <input type='radio' name='kitten' value={option.kittenName} checked={selectedKitten === option.kittenName} onChange={onOptionChange}  />
//                 <div className={KittenReservationFormCSS.availableKittenRadioOptionInner}><label>{option.kittenName}</label>
//                 <img alt='Kitten' src={option.kittenPicture} style={{height:100,width:100}} /> </div>
//               </div>
//             )
//           })}

function ProductCard(props) {
  // props.product is the product we are selling
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Img src={product.kittenPicture} style={{ scale: "0.6" }} />
        <Card.Title>{product.kittenName}</Card.Title>
        <Card.Text>${product.reservationPrice}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              {/* <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label> */}
              {/* <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col> */}
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
