import React, { useState } from "react";
import { db } from "../config/firebase";
import AddNewParentCSS from "../styles/AddNewParent.module.css";
import AddNewTestimonyCSS from "../styles/AddNewTestimony.module.css";
import { addDoc, collection } from "firebase/firestore";

/** >>>>>>>>>>>>>>>>      Add New Parent      <<<<<<<<<<<<<<<<<<<<<<*/
const AddNewTestimony = () => {
  /*******************  useState constants  ************************/
  const [tempTestimony, setTempTestimony] = useState({});

  /******************* Add new Parent (Function) ************************/
  const addNewTestimony = async () => {
    if (Object.keys(tempTestimony).length > 0) {
      try {
        await addDoc(collection(db, "testimonies"), { ...tempTestimony });
      } catch (err) {
        console.log(err);
      }
    }
    setTempTestimony({});
  };

  return (
    <div>
      {/*************************     New Parent Form     ***************************/}
      <div className={AddNewTestimonyCSS.newTestimonyContainer}>
        <h4>Add new Testimony</h4>
        <hr />
        {/*--- Name ---*/}
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            setTempTestimony({
              ...tempTestimony,
              name: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- testimony picture ---*/}
        <label htmlFor="picture">Picture: </label>
        <input
          name="picture"
          type="text"
          onChange={(e) => {
            setTempTestimony({
              ...tempTestimony,
              picture: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Testimony ---*/}
        <label htmlFor="testimony">Testimony:</label>
        <br />
        <textarea
          name="testimony"
          onChange={(e) => {
            setTempTestimony({
              ...tempTestimony,
              testimony: e.target.value,
            });
          }}
          required
        ></textarea>

        <br />
        {/*===  Add new testimony buttom ===*/}
        <button onClick={() => addNewTestimony()}>Add new Testimony</button>
        <br />
      </div>
    </div>
  );
};

export default AddNewTestimony;
