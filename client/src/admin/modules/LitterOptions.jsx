import React, { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import LitterOptionsCSS from "../styles/LitterOptions.module.css";
import { ParentsData } from "../context/ParentsContext";
import { LittersData } from "../context/LittersContext";

/** >>>>>>>>>>>>>>>>     Litter Options       <<<<<<<<<<<<<<<<<<<<<<*/
const LitterOptions = () => {
  /*******************  useState constants  ************************/
  const [tempLitter, setTempLitter] = useState({});

  /*******************  Get Parents from db  ************************/
  const { parentList, getParentName } = ParentsData();
  const { litterList } = LittersData();

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

  /******************* Edit Litter (Function) ************************/
  const editLitter = async (id) => {
    console.log("edit was called");

    // In case there are no editions submited, skip
    if (Object.keys(tempLitter).length > 0) {
      try {
        console.log("sending edit changes");
        await updateDoc(doc(db, "litters", id), {
          ...tempLitter,
        });
      } catch (err) {
        console.log(err);
      }
      setTempLitter({});
    }
  };

  /******************* Delete Litter (Function) ************************/
  const deleteLitter = async (id) => {
    console.log("delete was called");
    try {
      console.log("sending edit changes");
      await deleteDoc(doc(db, "litters", id));
    } catch (err) {
      console.log(err);
    }
  };

  //*****************    Display all Litters    **********************
  return (
    <div>
      {/*>>>>>>>>>    For each Litter display:   <<<<<<<<<<<<<*/}
      {litterList.map((litter) => {
        // Deconstruct litter attributes
        const { id, info } = litter;
        const { name, motherID, fatherID, dob, picture, arriveHome } = info;

        return (
          <article key={id} className={LitterOptionsCSS.litterContainer}>
            {/*======   Delete option: Rigth-top corner  =====*/}
            <div></div>
            <div></div>
            <div className={LitterOptionsCSS.deleteContainer}>
              <button type="button" onClick={() => deleteLitter(id)}>
                Delete Litter
              </button>
            </div>
            {/*======   Display: litter's Picture  =====*/}
            <section className={LitterOptionsCSS.pictureContainer}>
              <img src={picture} alt={name} />
            </section>
            {/*======   Display: Litter's Info  =====*/}
            <section className={LitterOptionsCSS.litterInfo}>
              <h4>Litter Information</h4>
              <hr />
              <label htmlFor="name">Litter:</label>
              <input name="name" type="text" value={name} readOnly />
              <br />
              <label htmlFor="name">Mother:</label>
              <input
                name="name"
                type="text"
                value={getParentName(motherID)}
                readOnly
              />
              <br />
              <label htmlFor="name">Father:</label>
              <input
                name="name"
                type="text"
                value={getParentName(fatherID)}
                readOnly
              />
              <br />
              <label htmlFor="name">dob:</label>
              <input name="name" type="text" value={dob} readOnly />
              <br />
              <label htmlFor="picture">Picture:</label>
              <input name="picture" type="text" value={picture} readOnly />
              <br />
              <label>Date: (approximately kittens went home)</label>
              <br />
              <input name="name" type="text" value={arriveHome} readOnly />
              <br />
            </section>
            {/*======   Display: Litter's Editting Options  =====*/}
            <div className={LitterOptionsCSS.edittingOptions}>
              <h4>Edit Information</h4>
              <hr />
              {/*--- Display: Litter's Name ---*/}
              <label htmlFor="name">Litter:</label>
              <input
                name="name"
                type="text"
                placeholder={name}
                onChange={(e) => {
                  setTempLitter({
                    ...tempLitter,
                    name: e.target.value,
                  });
                }}
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
              />
              <br />
              {/*--- Approximately when they arrive home ---*/}
              <div className="block " htmlFor="arriveHome">
                <label>Date: (approximately kittens went home)</label>
                <br />
                <input
                  name="arriveHome"
                  type="date"
                  onChange={(e) => {
                    setTempLitter({
                      ...tempLitter,
                      arriveHome: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              {/*===  Edit buttom ===*/}
              <button type="submit" onClick={() => editLitter(id)}>
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

export default LitterOptions;
