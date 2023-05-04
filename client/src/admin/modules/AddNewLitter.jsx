import React, { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import AddNewLitterCSS from "../styles/AddNewLitter.module.css";
import { ParentsData } from "../context/ParentsContext";

const AddNewLitter = () => {
  /*******************  useState constants  ************************/
  const [tempLitter, setTempLitter] = useState({});

  /*******************  Get Parents from db  ************************/
  const { parentList } = ParentsData();

  /*******************  Chose the litter's mother  ************************/
  const ChooseMother = () => {
    return (
      <select
        id="motherID"
        key="motherID"
        onChange={(e) =>
          setTempLitter({ ...tempLitter, motherID: e.target.value })
        }
      >
        <option value="default" key="motherDefault">
          Choose:{" "}
        </option>
        {parentList.map((parent) => {
          return (
            <option value={parent?.id} key={parent?.id}>
              {parent?.info?.name}
            </option>
          );
        })}
      </select>
    );
  };

  /*******************  Chose the litter's father  ************************/
  const ChooseFather = () => {
    return (
      <select
        id="fatherID"
        key="fatherID"
        onChange={(e) =>
          setTempLitter({ ...tempLitter, fatherID: e.target.value })
        }
      >
        <option value="default" key="fatherDefault">
          Choose:
        </option>
        {parentList.map((parent) => {
          return (
            <option value={parent?.id} key={parent?.id}>
              {parent?.info?.name}
            </option>
          );
        })}
      </select>
    );
  };

  /******************* Add new Litter (Function) ************************/
  const addNewLitter = async () => {
    console.log(tempLitter);
    if (Object.keys(tempLitter).length > 0) {
      try {
        await addDoc(collection(db, "litters"), { ...tempLitter });
      } catch (err) {
        console.log(err);
      }
    }
    setTempLitter({});
  };

  return (
    <div>
      {/*************************     New Litter     ***************************/}
      <div className={AddNewLitterCSS.newLitterContainer}>
        <h4>Add new Litter</h4>
        <hr />
        {/*--- Litter's Name ---*/}
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            setTempLitter({
              ...tempLitter,
              name: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Mother ID---*/}
        <label htmlFor="motherID">Mother:</label>
        <ChooseMother />
        <br />
        {/*--- Father ID ---*/}
        <label htmlFor="fatherID">Father:</label>
        <ChooseFather />
        <br />
        {/*--- DOB ---*/}
        <label htmlFor="dob">DOB: </label>
        <input
          name="dob"
          type="date"
          onChange={(e) => {
            setTempLitter({
              ...tempLitter,
              dob: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Litter's picture ---*/}
        <label htmlFor="picture">Picture: </label>
        <input
          name="picture"
          type="text"
          onChange={(e) => {
            setTempLitter({
              ...tempLitter,
              picture: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Approximately when they arrive home ---*/}
        <div className="block " htmlFor="arrive_home">
          <label>Date: (approximately kittens went home)</label>
          <br />
          <input
            name="arrive_home"
            type="date"
            onChange={(e) => {
              setTempLitter({
                ...tempLitter,
                arriveHome: e.target.value,
              });
            }}
            required
          />
        </div>
        <br />
        {/*===  Add new litter buttom ===*/}
        <button type="submit" onClick={() => addNewLitter()}>
          Add new Litter
        </button>
        <br />
      </div>
    </div>
  );
};

export default AddNewLitter;
