import React from "react";
import LitterModalCSS from "./styles/LitterModal.module.css";
import { KittensData } from "../admin/context/KittensContext";
import { ParentsData } from "../admin/context/ParentsContext";

const LitterModal = ({ litter, handleModalOpen }) => {
  const { id, info } = litter;
  const { name, motherID, fatherID, dob, picture, arriveHome } = info;

  const { getParentPicture } = ParentsData();

  return (
    // <div className="fixed bg-orange-100/80 w-screen h-screen z-10 top-0 left-0 justify-center items-center ">
    <div className={LitterModalCSS.modalBackground}>
      {/* <div className="relative bg-black  text-white text-5xl w-[380px] md:w-90% mx-auto my-4 rounded-3xl z-50"> */}
      <div className={LitterModalCSS.modalContainer}>
        <div className={LitterModalCSS.closeBtn}>
          <button onClick={() => handleModalOpen()} id="test2.2closebtn">
            {" "}
            X{" "}
          </button>
        </div>
        <div className={LitterModalCSS.title}>
          <h1>Kittens for Sale!</h1>
          <p>
            <b>Date of Birth:</b> {dob}
          </p>
          <p>
            <b>Approx. Go Home Date:</b> {arriveHome}
          </p>
        </div>

        {/* Litter picture and both of the Parents */}
        <div className={LitterModalCSS.gridLitterandParents}>
          <div className={LitterModalCSS.litterImg}>
            <img src={picture} alt="litterPicture" />
          </div>
          <div className={LitterModalCSS.litterParent}>
            <div className={LitterModalCSS.litterParentPicture}>
              <img src={getParentPicture(motherID)} alt="litterMom" />
            </div>
            <div className={LitterModalCSS.momAndDadText}>MOM</div>
          </div>
          <div className={LitterModalCSS.litterParent}>
            <div className={LitterModalCSS.litterParentPicture}>
              <img src={getParentPicture(fatherID)} alt="litterDad" />
            </div>
            <div className={LitterModalCSS.momAndDadText}>DAD</div>
          </div>
        </div>

        {/* Individual Kitten Pictures and Info */}
        <DiplayKitten litterID={id} />
        <div></div>
        {/* </div> */}
      </div>
    </div>
  );
};

const DiplayKitten = ({ litterID }) => {
  const { getKittensByLitterID } = KittensData();
  // Get all the kittens on this litter
  const kittenList = getKittensByLitterID(litterID);
  console.log(kittenList);
  return (
    <div className={LitterModalCSS.kittensContainer}>
      {kittenList.map((kitten) => {
        const { id, info } = kitten;
        const { name, color, pattern, picture, sex, status, price } = info;
        console.log(kitten);
        return (
          <div className={LitterModalCSS.kittenContainer} key={id}>
            <div className={LitterModalCSS.kittenPicture}>
              <img src={picture} alt={name} />
            </div>
            <div className={LitterModalCSS.kittenInfo}>
              <p>
                <b>Color: </b> {color}
              </p>
              <p>
                <b>Pattern: </b> {pattern}
              </p>
              <p>
                <b>Sex:</b> {sex}
              </p>
              <p>
                <b>Status: </b> {status}
              </p>
              <p>
                <b>Price($): </b> {price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LitterModal;
