import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./config/firebase";
import {
  addDoc,
  deleteDoc,
  onSnapshot,
  query,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import AdminOurCatsCSS from "./styles/AdminOurCats.module.css";
import SignOut from "./modules/SignOut";

/** >>>>>>>>>>>>>>>>      Admin OurCats page       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminOurCats = () => {
  const navigate = useNavigate();
  return (
    <div className={AdminOurCatsCSS.adminOurCatsContainer}>
      {/*************  Sign out  ****************/}
      <SignOut />

      {/******      Return Admin Home Page     *********/}
      <div className={AdminOurCatsCSS.navigationContainer}>
        <input
          type="button"
          onClick={() => navigate("/adminHomePage", { replace: true })}
          value="Return Admin Homepage"
        />
      </div>

      {/*******     Parent Information  ***********/}
      <OurCatsOptions />
    </div>
  );
};

/** >>>>>>>>>>>>>>>>       Display all parents       <<<<<<<<<<<<<<<<<<<<<<*/
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

  /******************* Add new Parent (Function) ************************/
  const addNewParent = async () => {
    console.log("new parent");
    console.log(tempParent);
    if (Object.keys(tempParent).length > 0) {
      console.log("sending to db");
      try {
        await addDoc(collection(db, "parents"), { ...tempParent });
        setWaschanged(true);
      } catch (err) {
        console.log(err);
      }
    }
    setTempParent({} as parentFormat);
  };

  /******************* Edit Parents (Function) ************************/
  const editParent = async (id: string) => {
    console.log("edit was called");
    // console.log(tempParent);
    // console.log(Object.keys(tempParent).length);
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

  /******************* Delete Parent (Function) ************************/
  const deleteParent = async (id: string) => {
    console.log("delete was called");
    try {
      console.log("sending edit changes");
      await deleteDoc(doc(db, "parents", id));
      setWaschanged(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/*************************     New Parent Form     ***************************/}
      <section className={AdminOurCatsCSS.newParentContainer}>
        <h4>Add new Parent</h4>
        <hr />
        {/*--- Parent's Name ---*/}
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            e.isDefaultPrevented();
            setTempParent({
              ...tempParent,
              name: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Parent's sex ---*/}
        <label htmlFor="sex">Sex:</label>
        <input
          name="sex"
          type="text"
          onChange={(e) => {
            e.isDefaultPrevented();
            setTempParent({
              ...tempParent,
              sex: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Parent's attribute ---*/}
        <label htmlFor="attitude">Attitude:</label>
        <input
          name="attitude"
          type="text"
          onChange={(e) => {
            e.isDefaultPrevented();
            setTempParent({
              ...tempParent,
              attitude: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*--- Display: Parent's status ---*/}
        <label htmlFor="status">Status: </label>
        <input
          name="status"
          type="text"
          onChange={(e) => {
            e.isDefaultPrevented();
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
            e.isDefaultPrevented();
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
            e.isDefaultPrevented();
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
            e.isDefaultPrevented();
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
            e.isDefaultPrevented();
            setTempParent({
              ...tempParent,
              picture: e.target.value,
            });
          }}
          required
        />
        <br />
        {/*===  Add new parent buttom ===*/}
        <button type="button" onClick={() => addNewParent()}>
          Add new Parent
        </button>
        <br />
      </section>

      {/**************************     Display all Parents    ****************************/}
      {/*>>>>>>>>>    For each parent display:   <<<<<<<<<<<<<*/}
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
          <article key={id} className={AdminOurCatsCSS.parentContainer}>
            {/*======   Delete optio: Rigth-top corner  =====*/}
            <div></div>
            <div></div>
            <div className={AdminOurCatsCSS.deleteContainer}>
              <button type="button" onClick={() => deleteParent(id)}>
                Delete Parent
              </button>
            </div>

            {/*======   Display: Parent's Picture  =====*/}
            <section className={AdminOurCatsCSS.pictureContainer}>
              <img src={picture} />
            </section>
            {/*======   Display: Parent's Info  =====*/}
            <section className={AdminOurCatsCSS.parentInfo}>
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
            <section className={AdminOurCatsCSS.edittingOptions}>
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

export default AdminOurCats;
