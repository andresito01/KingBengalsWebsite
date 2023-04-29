import { db } from "../admin/config/firebase";
import { onSnapshot, query, collection, getDocs } from "firebase/firestore";
import { useState } from "react";

// let kittenAvailableOptions = litterupdatesmodaljson.map((litterID) => (
//   litterID.kittens.filter((kitten) => kitten.kittenStatus === "Available")
// )).flat(1)

// {kittenAvailableOptions.map((option, index) => {
//   return (
//     <div className={KittenReservationFormCSS.availableKittenRadioOption} key={index}>
//       <input type='radio' name='kitten' value={option.kittenName} checked={selectedKitten === option.kittenName} onChange={onOptionChange}  />
//       <div className={KittenReservationFormCSS.availableKittenRadioOptionInner}><label>{option.kittenName}</label>
//       <img alt='Kitten' src={option.kittenPicture} style={{height:100,width:100}} /> </div>
//     </div>
//   )
// })}

const getAvailableKittensFromFirebase = async () => {
  let availableKittens = [];
  const litterData = await getDocs(collection(db, "litters"));
  litterData.forEach((doc) => {
    availableKittens.push(
      doc.data().kittens.filter((kitten) => kitten.isAvailable === true)
    );
  });

  availableKittens = availableKittens.flat(1);

  return availableKittens;
};

const productsArray = getAvailableKittensFromFirebase();

async function getProductData(id) {
  let data = await productsArray;
  let productData = data.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for id: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
