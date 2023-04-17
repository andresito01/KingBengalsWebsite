import React, { ReactElement, useEffect, useState } from "react";

import { db } from "../admin/config/firebase";
import {
  onSnapshot,
  query,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import AdminHomeCSS from "./styles/AdminHome.module.css";
import SignOut from "./modules/SignOut";
import OurCats from "../pages/OurCats";
import { ListFormat } from "typescript";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

/** >>>>>>>>>>>>>>>>       Home Page (for Admins)       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={AdminHomeCSS.adminHomeContainer}>
      {/**********************      Current User     *******************************/}
      <SignOut />
      <div className={AdminHomeCSS.welcomeContainer}>
        <h2>Welcome to our admin Page</h2>
        <p>Available Options</p>
        <input
          type="button"
          onClick={() => navigate("/adminOurCats", { replace: true })}
          value="Edit Parents"
        />
      </div>
    </div>
  );
};

const OurCatsOptions = () => {
  /******* Parent structure ***********/
  interface parentFormat {
    id: string;
    name: string;
    sex: string;
    attitude: string;
    picture: string;
    status: string;
    pattern: string;
    lineage: string;
    history: string;
  }

  /*******************  useState constants  ************************/
  const [parentList, setParentList] = useState([] as parentFormat[]);
  const [wasChanged, setWaschanged] = useState(true);
  const [tempParent, setTempParent] = useState({} as parentFormat);

  /*******************  Get Parents from db  ************************/
  useEffect(() => {
    try {
      if (wasChanged) {
        onSnapshot(query(collection(db, "parents")), (snapshot) => {
          const data: Array<any> = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setParentList(data);
          setWaschanged(false);
          console.log("Parent were loaded from db");
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  /******************* Edit Parents (Function) ************************/
  const editParent = async (id: string) => {
    console.log("edit was called");
    console.log(tempParent);
    console.log(Object.keys(tempParent).length);
    // In case there are no editions submited, skip
    if (Object.keys(tempParent).length > 0) {
      try {
        console.log("sending edit changes");
        await updateDoc(doc(db, "parents", id), {
          ...tempParent,
        });
        setWaschanged(true);
      } catch (err) {
        console.log(err);
      }
      setTempParent({} as parentFormat);
    }
  };

  /*******************   Display all Parents    ************************/
  return (
    <div>
      {/*>>>>>>>>>>>>    For each parent display:   <<<<<<<<<<<<<<<<<*/}
      {parentList.map((parent) => {
        const {
          id,
          name,
          sex,
          picture,
          attitude,
          status,
          pattern,
          lineage,
          history,
        } = parent;
        return (
          <article key={id} className={AdminHomeCSS.parentContainer}>
            {/*======   Display: Parent's Picture  =====*/}
            <section className={AdminHomeCSS.pictureContainer}>
              <img src={picture} />
            </section>
            {/*======   Display: Parent's Info  =====*/}
            <section className={AdminHomeCSS.parentInfo}>
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
            <section className={AdminHomeCSS.edittingOptions}>
              <h4>Edit Information</h4>
              <hr />
              {/*--- Display: Parent's Name ---*/}
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                placeholder={name}
                onChange={(e) => {
                  e.isDefaultPrevented();
                  setTempParent({
                    ...tempParent,
                    name: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's sex ---*/}
              <label htmlFor="sex">Sex:</label>
              <input
                name="sex"
                type="text"
                placeholder={sex}
                onChange={(e) => {
                  e.isDefaultPrevented();
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
                placeholder={attitude}
                onChange={(e) => {
                  e.isDefaultPrevented();
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
                placeholder={status}
                onChange={(e) => {
                  e.isDefaultPrevented();
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
                onChange={(e) => {
                  e.isDefaultPrevented();
                  setTempParent({
                    ...tempParent,
                    pattern: e.target.value,
                  });
                }}
              />
              <br />
              {/*--- Display: Parent's linea ---*/}
              <label htmlFor="lineage">Lineage:</label>
              <input
                name="lineage"
                type="text"
                placeholder={lineage}
                onChange={(e) => {
                  e.isDefaultPrevented();
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
                placeholder={history}
                onChange={(e) => {
                  e.isDefaultPrevented();
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
                placeholder={picture}
                onChange={(e) => {
                  e.isDefaultPrevented();
                  setTempParent({
                    ...tempParent,
                    picture: e.target.value,
                  });
                }}
              />
              <br />
              {/*===  Edit buttom ===*/}
              <button type="button" onClick={() => editParent(id)}>
                Submit Changes
              </button>
              <br />
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default AdminHomePage;
