import React, { useState } from "react";
import DisplayLitterCSS from "./styles/DisplayLitter.module.css";
import { LittersData } from "../admin/context/LittersContext";
import { KittensData } from "../admin/context/KittensContext";
import LitterModal from "./LitterModal";

const DisplayLitter = () => {
  const { litterList } = LittersData();
  return (
    <>
      {litterList.map((litter) => {
        return <Litter litter={litter} />;
      })}
    </>
  );
};

const Litter = ({ litter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /***************  litter's attributes  *********************/
  const { id, info } = litter;
  const { name, picture } = info;

  /**********  List of kittens in this litter  *****************/
  const { litterSize, availableInLitter, soldInLitter, reservedInLitter } =
    KittensData();

  // const kittenList = getKittensByLitterID(id);

  const size = litterSize(id);
  const available = availableInLitter(id);
  const sold = soldInLitter(id);
  const reserved = reservedInLitter(id);

  /*******************  Modal handler  ************************/
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={DisplayLitterCSS.containerBtn} key={id}>
      <div
        onClick={() => handleModalOpen()}
        className={DisplayLitterCSS.litterInfo}
      >
        <div>
          <h1>
            <b>
              <u>Litter: {name}</u>
            </b>
          </h1>
          <p>
            <b>Total Kittens: </b>
            {size}
          </p>
          <p>
            <b>Available: </b>
            {available}
          </p>
          <p>
            <b>Reserved: </b>
            {reserved}
          </p>
          <p>
            <b>Already Sold: </b>
            {sold}
          </p>
        </div>
        <img alt={`Litter: ${name}`} src={picture} />
      </div>
      {isModalOpen ? (
        <LitterModal litter={litter} handleModalOpen={handleModalOpen} />
      ) : null}
    </div>
  );
};
export default DisplayLitter;
