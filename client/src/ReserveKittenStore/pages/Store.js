import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
// [{... }, {... }, {... }]

function Store() {
  const [kittenProductsArray, setKittenProductsArray] = useState([]);

  const getProductsArrayData = async () => {
    let data = await productsArray;
    setKittenProductsArray(data);
  };

  useEffect(() => {
    getProductsArrayData();
  }, []);

  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {kittenProductsArray.length >= 1 ? (
          kittenProductsArray.map((product, idx) => (
            <Col align="center" key={idx}>
              <ProductCard style={{ height: "auto" }} product={product} />
            </Col>
          ))
        ) : (
          <h1>No Kittens Available For Sale</h1>
        )}
      </Row>
    </>
  );
}

export default Store;
