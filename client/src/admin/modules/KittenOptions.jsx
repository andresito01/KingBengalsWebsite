import React, { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import KittenOptionsCSS from "../styles/KittenOptions.module.css";
import { LittersData } from "../context/LittersContext";
import { KittensData } from "../context/KittensContext";

/** >>>>>>>>>>>>>>>>     Litter Options       <<<<<<<<<<<<<<<<<<<<<<*/
const KittenOptions = () => {
  /*******************  useState constants  ************************/
  const [tempKitten, setTempKitten] = useState({});
  /*******************  Get Parents from db  ************************/
  const { litterList, getLitterName } = LittersData();
  const { kittenList } = KittensData();

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

  /******************* Edit Kitten (Function) ************************/
  const editKitten = async (id) => {
    console.log("edit was called");

    // In case there are no editions submited, skip
    if (Object.keys(tempKitten).length > 0) {
      try {
        console.log("sending edit changes");
        await updateDoc(doc(db, "kittens", id), {
          ...tempKitten,
        });
      } catch (err) {
        console.log(err);
      }
      setTempKitten({});
    }
  };

  /******************* Delete Kitten (Function) ************************/
  const deleteKitten = async (id) => {
    console.log("delete was called");
    try {
      console.log("sending edit changes");
      await deleteDoc(doc(db, "kittens", id));
    } catch (err) {
      console.log(err);
    }
  };

  //*****************    Display all Kitten    **********************
  return (
    <div>
      {/*>>>>>>>>>    For each Litter display:   <<<<<<<<<<<<<*/}
      {kittenList.map((kitten) => {
        // Deconstruct litter attributes
        const { id, info } = kitten;
        const {
          name,
          litterID,
          color,
          pattern,
          picture,
          price,
          reservePrice,
          sex,
          status,
        } = info;

        return (
          <article key={id} className={KittenOptionsCSS.kittenContainer}>
            {/*======   Delete option: Rigth-top corner  =====*/}
            <div></div>
            <div></div>
            <div className={KittenOptionsCSS.deleteContainer}>
              <button type="button" onClick={() => deleteKitten(id)}>
                Delete Litter
              </button>
            </div>
            {/*======   Display: litter's Picture  =====*/}
            <section className={KittenOptionsCSS.pictureContainer}>
              <img src={picture} alt={name} />
            </section>
            {/*======   Display: Kiiten's Info  =====*/}
            <section className={KittenOptionsCSS.kittenInfo}>
              <h4>Kitten Information</h4>
              <hr />
              <label htmlFor="litterID">Litter:</label>
              <input
                name="litterID"
                type="text"
                value={getLitterName(litterID)}
                readOnly
              />
              <br />
              <label htmlFor="name">Name:</label>
              <input name="name" type="text" value={name} readOnly />
              <br />
              <label htmlFor="color">Color:</label>
              <input name="color" type="text" value={color} readOnly />
              <br />
              <label htmlFor="pattern">Pattern:</label>
              <input name="pattern" type="text" value={pattern} readOnly />
              <br />
              <label htmlFor="picture">Picture:</label>
              <input name="picture" type="text" value={picture} readOnly />
              <br />
              <label htmlFor="price">Price:</label>
              <input name="price" type="text" value={price} readOnly />
              <br />
              <label htmlFor="reservePrice">Reserve Price:</label>
              <input
                name="reservePrice"
                type="text"
                value={reservePrice}
                readOnly
              />
              <br />
              <label htmlFor="sex">sex:</label>
              <input name="sex" type="text" value={sex} readOnly />
              <br />
              <label htmlFor="status">status:</label>
              <input name="status" type="text" value={status} readOnly />
              <br />
            </section>
            {/*======   Display: Parent's Editting Options  =====*/}
            <div className={KittenOptionsCSS.edittingOptions}>
              <h4>Edit Information</h4>
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
              <label htmlFor="reservePrice">Reserve Price: </label>
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
                <input
                  id="available"
                  type="radio"
                  value="available"
                  name="status"
                />
                <label htmlFor="available">Available</label>
                <input
                  id="reserved"
                  type="radio"
                  value="reserved"
                  name="status"
                />
                <label htmlFor="reserved">Reserved</label>
                <input id="sold" type="radio" value="sold" name="status" />
                <label htmlFor="sold">Sold:</label>
              </fieldset>

              <br />
              {/*===  Edit buttom ===*/}
              <button type="submit" onClick={() => editKitten(id)}>
                Submit Changes
              </button>
              <br />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default KittenOptions;
