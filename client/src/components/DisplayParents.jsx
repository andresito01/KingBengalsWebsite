import React, { useState } from "react";
import { ParentsData } from "../admin/context/ParentsContext";

import DisplayParentsCSS from "./styles/DisplayParents.module.css";

const DisplayParents = () => {
  /*******************  Get Parents  ************************/
  const { parentList } = ParentsData();

  return (
    <>
      {parentList.map((parent) => {
        return <Parent parent={parent} />;
      })}
    </>
  );
};

const Parent = ({ parent }) => {
  /*******************  parent's attributes  ************************/
  const { id, info } = parent;
  const { name, sex, picture, status, attitude, pattern, lineage, history } =
    info;
  /*******************  useState constants  ************************/
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  /*******************  Open/close slider  ************************/
  const changeSliderStatus = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    /*******************  on-click open/close slider  ************************/
    <div onClick={changeSliderStatus} key={id} id="test2.1opencloseslider">
      <div>
        {/***************   Parent(name & image)  ******************* */}
        <div>
          <div className={DisplayParentsCSS.parentContainer}>
            <h4>
              {name}
              <p>{sex}</p>
            </h4>
            <br />

            <div className={DisplayParentsCSS.parentAndSlider}>
              <img alt={name} src={picture} />
              {/***************   if slider is open  ******************* */}
              {isSliderOpen ? (
                // ***  display slider ***
                <>
                  <div className={DisplayParentsCSS.sliderInfo}>
                    <table>
                      <tbody>
                        <tr>
                          <th>Lineage:</th>
                          <td>{lineage}</td>
                        </tr>
                        <tr>
                          <th>Status:</th>
                          <td>{status}</td>
                        </tr>
                        <tr>
                          <th>Attitude:</th>
                          <td>{attitude}</td>
                        </tr>
                        <tr>
                          <th>Pattern:</th>
                          <td>{pattern}</td>
                        </tr>
                        <tr>
                          <th>History:</th>
                          <td>{history}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              ) : // ***  Else: display nothing ***
              null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayParents;
