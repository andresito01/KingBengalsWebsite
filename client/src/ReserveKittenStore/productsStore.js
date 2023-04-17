// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

import litterupdatesmodaljson from "../json/litterupdatesmodal.json";

// const productsArray = [
//   {
//     id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
//     title: "Coffee",
//     price: 4.99,
//   },
//   {
//     id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
//     title: "Sunglasses",
//     price: 9.99,
//   },
//   {
//     id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
//     title: "Camera",
//     price: 39.99,
//   },
// ];

const productsArray = litterupdatesmodaljson
  .map((litterID) =>
    litterID.kittens.filter((kitten) => kitten.kittenStatus === "Available")
  )
  .flat(1);

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for id: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
