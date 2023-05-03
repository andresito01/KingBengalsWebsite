import React, { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import AddNewKittenCSS from "../styles/AddNewKitten.module.css";
import { LittersData } from "../context/LittersContext";

const AddNewKitten = () => {
  /*******************  useState constants  ************************/
  const [tempKitten, setTempKitten] = useState({});

  /*******************  Get Litters  ************************/
  const { litterList } = LittersData();

  /*******************  Chose the Litter  ************************/
  const ChooseLitter = () => {
    return (
      <select
        id="litterID"
        key="litterID"
        onChange={(e) =>
          setTempKitten({ ...tempKitten, litterID: e.target.value })
        }
      >
        <option value="default" key="defaultLitter">
          Choose:
        </option>
        {litterList.map((litter) => {
          return (
            <option value={litter?.id} key={litter?.id}>
              {litter?.info?.name}
            </option>
          );
        })}
      </select>
    );
  };

  /******************* Add new Kitten (Function) ************************/
  const addNewKitten = async () => {
    console.log(tempKitten);
    if (Object.keys(tempKitten).length > 0) {
      try {
        await addDoc(collection(db, "kittens"), { ...tempKitten });
      } catch (err) {
        console.log(err);
      }
    }
    setTempKitten({});
  };

  return (
    <div>
      {/*************************     New Litter     ***************************/}
      <div className={AddNewKittenCSS.newKittenContainer}>
        <h4>Add new Kitten</h4>
        <hr />
        {/*--- Litter ID---*/}
        <label htmlFor="litterID">Litter:</label>
        <ChooseLitter />
        <br />
        {/*--- Litter's Name ---*/}
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              name: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Color ---*/}
        <label htmlFor="color">Color: </label>
        <input
          name="color"
          type="text"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              color: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Pattern ---*/}
        <label htmlFor="pattern">Pattern: </label>
        <input
          name="pattern"
          type="text"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              pattern: e.target.value,
            });
          }}
          required
        />
        <br />

        {/*--- picture ---*/}
        <label htmlFor="picture">Picture: </label>
        <input
          name="picture"
          type="text"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              picture: e.target.value,
            });
          }}
          required
        />
        <br />

        {/*--- Price ---*/}
        <label htmlFor="price">Price: </label>
        <input
          name="price"
          type="number"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              price: e.target.value,
            });
          }}
          required
        />
        <br />

        {/*--- Reservation Price ---*/}
        <label htmlFor="reservePrice">Resevation Price: </label>
        <input
          name="reservePrice"
          type="number"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              reservePrice: e.target.value,
            });
          }}
          required
        />
        <br />

        {/*--- Sex ---*/}
        <fieldset
          name="sex"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              sex: e.target.value,
            });
          }}
          required
        >
          <legend className="text-white">Sex:</legend>
          <input id="male" type="radio" value="male" name="sex" />
          <label htmlFor="male">male</label>
          <input id="female" type="radio" value="female" name="sex" />
          <label htmlFor="female">female</label>
        </fieldset>

        {/*--- Status ---*/}
        <fieldset
          name="status"
          onChange={(e) => {
            setTempKitten({
              ...tempKitten,
              status: e.target.value,
            });
          }}
          required
        >
          <legend className="text-white">Status:</legend>
          <input id="available" type="radio" value="available" name="status" />
          <label htmlFor="available">Available</label>
          <input id="reserved" type="radio" value="reserved" name="status" />
          <label htmlFor="reserved">Reserved</label>
          <input id="sold" type="radio" value="sold" name="status" />
          <label htmlFor="sold">Sold:</label>
        </fieldset>

        <br />

        {/*===  Add new Kitten buttom ===*/}
        <button type="submit" onClick={() => addNewKitten()}>
          Add New Kitten
        </button>
        <br />
      </div>
    </div>
  );
};

export default AddNewKitten;
