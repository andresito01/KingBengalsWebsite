import React, { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import TestimonyOptionsCSS from "../styles/TestimonyOptions.module.css";
import { TestimonyData } from "../context/TestimonyContext";

/** >>>>>>>>>>>>>>>>     Litter Options       <<<<<<<<<<<<<<<<<<<<<<*/
const TestimonyOptions = () => {
  /*******************  useState constants  ************************/
  const [tempTestimony, setTempTestimony] = useState({});
  /*******************  Get Testimonies from db  ************************/

  const { testimonyList } = TestimonyData();

  /******************* Edit Litter (Function) ************************/
  const editTestimony = async (id) => {
    console.log("edit was called");

    // In case there are no editions submited, skip
    if (Object.keys(tempTestimony).length > 0) {
      try {
        console.log("sending edit changes");
        await updateDoc(doc(db, "testimonies", id), {
          ...tempTestimony,
        });
      } catch (err) {
        console.log(err);
      }
      setTempTestimony({});
    }
  };

  /******************* Delete Litter (Function) ************************/
  const deleteTestimony = async (id) => {
    console.log("delete was called");
    try {
      console.log("sending edit changes");
      await deleteDoc(doc(db, "testimonies", id));
    } catch (err) {
      console.log(err);
    }
  };

  //*****************    Display all Litters    **********************
  return (
    <div>
      {/*>>>>>>>>>    For each Litter display:   <<<<<<<<<<<<<*/}
      {testimonyList.map((testimonial) => {
        // Deconstruct testimony attributes
        const { id, info } = testimonial;
        const { name, testimony, picture } = info;

        return (
          <article key={id} className={TestimonyOptionsCSS.testimonyContainer}>
            {/*======   Delete option: Rigth-top corner  =====*/}
            <div></div>
            <div></div>
            <div className={TestimonyOptionsCSS.deleteContainer}>
              <button type="button" onClick={() => deleteTestimony(id)}>
                Delete Testimony
              </button>
            </div>
            {/*======   Display: litter's Picture  =====*/}
            <section className={TestimonyOptionsCSS.pictureContainer}>
              <img src={picture} alt={name} />
            </section>
            {/*======   Display: Litter's Info  =====*/}
            <section className={TestimonyOptionsCSS.testimonyInfo}>
              <h4>Testimony Information</h4>
              <hr />
              <label htmlFor="name">Name:</label>
              <input name="name" type="text" value={name} readOnly />
              <br />
              <label htmlFor="picture">Picture:</label>
              <input name="picture" type="text" value={picture} readOnly />
              <br />
              <label htmlFor="testimony">testimony:</label>
              <br />
              <textarea
                name="name"
                type="text"
                value={testimony}
                readOnly
              ></textarea>
            </section>
            {/*======   Display: testimony's Editting Options  =====*/}
            <div className={TestimonyOptionsCSS.edittingOptions}>
              <h4>Edit testimony</h4>
              <hr />
              {/*--- Display: Litter's Name ---*/}
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                placeholder={name}
                onChange={(e) => {
                  setTempTestimony({
                    ...tempTestimony,
                    name: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Testimony's picture ---*/}
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
              />
              <br />
              {/*--- Testimony ---*/}
              <label htmlFor="testimony">Testimony: </label>
              <br />
              <textarea
                name="testimony"
                type="text"
                onChange={(e) => {
                  setTempTestimony({
                    ...tempTestimony,
                    testimony: e.target.value,
                  });
                }}
              ></textarea>
              <br />

              {/*===  Edit buttom ===*/}
              <button type="submit" onClick={() => editTestimony(id)}>
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

export default TestimonyOptions;
