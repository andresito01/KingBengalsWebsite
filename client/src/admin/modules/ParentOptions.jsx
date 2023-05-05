import React, { useState } from "react";
import { db } from "../config/firebase";
import ParentOptionsCSS from "../styles/ParentOptions.module.css";
import { ParentsData } from "../context/ParentsContext";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

/** >>>>>>>>>>>>>>>>      Parent's Options        <<<<<<<<<<<<<<<<<<<<<<*/
const ParentOptions = () => {
  /*******************  useState constants  ************************/
  const [tempParent, setTempParent] = useState({});

  /*******************  Get Parents from db  ************************/
  const { parentList } = ParentsData();

  /******************* Edit Parents (Function) ************************/
  const editParent = async (id) => {
    // e.preventDefault();
    console.log("edit was called");

    // In case there are no editions submited, skip
    if (Object.keys(tempParent).length > 0) {
      try {
        console.log("sending edit changes");
        await updateDoc(doc(db, "parents", id), {
          ...tempParent,
        });
      } catch (err) {
        console.log(err);
      }
      setTempParent({});
    }
  };

  /******************* Delete Parent (Function) ************************/
  const deleteParent = async (id) => {
    console.log("delete was called");
    try {
      console.log("sending edit changes");
      await deleteDoc(doc(db, "parents", id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/**************************     Display all Parents    ****************************/}
      {/*>>>>>>>>>    For each parent display:   <<<<<<<<<<<<<*/}
      {parentList.map((parent) => {
        /****  parent's attributes ******/
        const { id, info } = parent;
        const {
          name,
          sex,
          picture,
          status,
          attitude,
          pattern,
          lineage,
          history,
        } = info;
        return (
          <article key={id} className={ParentOptionsCSS.parentContainer}>
            {/*======   Delete optio: Rigth-top corner  =====*/}
            <div></div>
            <div></div>
            <div className={ParentOptionsCSS.deleteContainer}>
              <button type="button" onClick={() => deleteParent(id)}>
                Delete Parent
              </button>
            </div>

            {/*======   Display: Parent's Picture  =====*/}
            <section className={ParentOptionsCSS.pictureContainer}>
              <img src={picture} alt={name} />
            </section>
            {/*======   Display: Parent's Info  =====*/}
            <section className={ParentOptionsCSS.parentInfo}>
              <h4>Parent Information</h4>
              <hr />
              <label htmlFor="name">Name:</label>
              <input name="name" type="text" value={name} readOnly />
              <br />
              <label htmlFor="sex">Sex:</label>
              <input name="sex" type="text" value={sex} readOnly />
              <br />
              <label htmlFor="attitude">Attitude:</label>
              <input name="attitude" type="text" value={attitude} readOnly />
              <br />
              <label htmlFor="status">Status:</label>
              <input name="status" type="text" value={status} readOnly />
              <br />
              <label htmlFor="pattern">Pattern:</label>
              <input name="pattern" type="text" value={pattern} readOnly />
              <br />
              <label htmlFor="lineage">Lineage:</label>
              <input name="lineage" type="text" value={lineage} readOnly />
              <br />
              <label htmlFor="history">History:</label>
              <input name="history" type="text" value={history} readOnly />
              <br />
              <label htmlFor="picture">Picture:</label>
              <input name="picture" type="text" value={picture} readOnly />
              <br />
            </section>
            {/*======   Display: Parent's Editting Options  =====*/}
            <div className={ParentOptionsCSS.edittingOptions}>
              <h4>Edit Information</h4>
              <hr />
              {/*--- Display: Parent's Name ---*/}
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                placeholder={name}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    name: e.target.value,
                  });
                }}
              />
              <br />
              {/* --- Display: Parent's sex ---*/}
              <label htmlFor="sex">Sex:</label>
              <input
                name="sex"
                type="text"
                placeholder={sex}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    sex: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's attribute ---*/}
              <label htmlFor="attitude">Attitude:</label>
              <input
                name="attitude"
                type="text"
                autoComplete="attitude"
                placeholder={attitude}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    attitude: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's status ---*/}
              <label htmlFor="status">Status: </label>
              <input
                name="status"
                type="text"
                autoComplete="status"
                placeholder={status}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    status: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's pattern ---*/}
              <label htmlFor="pattern">Pattern: </label>
              <input
                name="pattern"
                type="text"
                placeholder={pattern}
                autoComplete="pattern"
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    pattern: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's lineage ---*/}
              <label htmlFor="lineage">Lineage:</label>
              <input
                name="lineage"
                type="text"
                placeholder={lineage}
                autoComplete="lineage"
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    lineage: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's history ---*/}
              <label htmlFor="history">History:</label>
              <input
                name="history"
                type="text"
                autoComplete="history"
                placeholder={history}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    history: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's picture ---*/}
              <label htmlFor="picture">Picture: </label>
              <input
                name="picture"
                type="text"
                autoComplete="picture"
                placeholder={picture}
                onChange={(e) => {
                  setTempParent({
                    ...tempParent,
                    picture: e.target.value,
                  });
                }}
              />
              <br />

              {/* ===  Edit buttom === */}
              <button onClick={() => editParent(id)} type="submit">
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

export default ParentOptions;
