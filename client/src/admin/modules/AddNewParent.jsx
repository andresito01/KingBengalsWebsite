import React, { useState } from "react";
import { db } from "../config/firebase";
import AddNewParentCSS from "../styles/AddNewParent.module.css";
import { addDoc, collection } from "firebase/firestore";

/** >>>>>>>>>>>>>>>>      Add New Parent      <<<<<<<<<<<<<<<<<<<<<<*/
const AddNewParent = () => {
  /*******************  useState constants  ************************/
  const [tempParent, setTempParent] = useState({});

  /******************* Add new Parent (Function) ************************/
  const addNewParent = async () => {
    if (Object.keys(tempParent).length > 0) {
      try {
        await addDoc(collection(db, "parents"), { ...tempParent });
      } catch (err) {
        console.log(err);
      }
    }
    setTempParent({});
  };

  return (
    <div>
      {/*************************     New Parent Form     ***************************/}
      <div className={AddNewParentCSS.newParentContainer}>
        <h4>Add new Parent</h4>
        <hr />
        {/*--- Parent's Name ---*/}
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              name: e.target.value,
            });
          }}
          required
          id="test5.2parentname"
        />
        <br />

        {/*--- Parent's attribute ---*/}
        <label htmlFor="attitude">Attitude:</label>
        <input
          name="attitude"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              attitude: e.target.value,
            });
          }}
          required
          id="test5.2parentattitude"
        />
        <br />

        {/*--- Display: Parent's status ---*/}
        <label htmlFor="status">Status: </label>
        <input
          name="status"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              status: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Display: Parent's pattern ---*/}
        <label htmlFor="pattern">Pattern: </label>
        <input
          name="pattern"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              pattern: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Display: Parent's linea ---*/}
        <label htmlFor="lineage">Lineage:</label>
        <input
          name="lineage"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              lineage: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Display: Parent's history ---*/}
        <label htmlFor="history">History:</label>
        <input
          name="history"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              history: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Display: Parent's picture ---*/}
        <label htmlFor="picture">Picture: </label>
        <input
          name="picture"
          type="text"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              picture: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Sex ---*/}
        <fieldset
          name="sex"
          onChange={(e) => {
            setTempParent({
              ...tempParent,
              sex: e.target.value,
            });
          }}
          required
        >
          <legend>Sex:</legend>
          <input id="sire" type="radio" value="Sire" name="sex" />
          <label htmlFor="sire">Sire</label>
          <input id="dam" type="radio" value="Dam" name="sex" />
          <label htmlFor="dam">Dam</label>
        </fieldset>
        {/*===  Add new parent buttom ===*/}
        <button onClick={() => addNewParent()}>Add new Parent</button>
        <br />
      </div>
    </div>
  );
};

export default AddNewParent;
