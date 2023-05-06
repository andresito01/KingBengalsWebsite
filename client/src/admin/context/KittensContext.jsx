import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const KittensContext = createContext();

export function KittensContextProvider({ children }) {
  const [kittenList, setKittenList] = useState([]);

  /*******************  Get Litters from db  ************************/
  useEffect(() => {
    try {
      onSnapshot(query(collection(db, "kittens")), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          info: { ...doc.data() },
        }));
        setKittenList(data);
        console.log("Kittens were loaded from db");
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  /*******************  Find Kitten by Id ************************/
  const findKitten = (id) => {
    const result = kittenList.find((kitten) => kitten.id === id);
    return result;
  };

  /*******************  Get kitten's name by ID  ************************/
  const getKittenName = (id) => {
    const result = findKitten(id);
    return result.info.name;
  };

  /*******************  Get kittens by litterID  ************************/
  const getKittensByLitterID = (litterID) => {
    const result = kittenList.filter(
      (kitten) => kitten?.info?.litterID === litterID
    );
    return result;
  };

  // /*******************  Litter size   ************************/
  const litterSize = (litterID) => {
    const result = kittenList.filter(
      (kitten) => kitten?.info?.litterID === litterID
    );
    const size = Object.keys(result).length;
    return size;
  };
  // /*******************  Available kittens by litterD  ************************/
  const availableInLitter = (litterID) => {
    const result = kittenList.filter(
      (kitten) => kitten?.info?.litterID === litterID
    );
    const available = result.filter(
      (kitten) => kitten?.info?.status === "available"
    );
    const r = Object.keys(available).length;
    return r;
  };

  /*******************  Sold kittens by litterD  ************************/
  const soldInLitter = (litterID) => {
    const result = kittenList.filter(
      (kitten) => kitten?.info?.litterID === litterID
    );
    const sold = result.filter((kitten) => kitten?.info?.status === "sold");
    const r = Object.keys(sold).length;
    return r;
  };

  /*******************  Reserved kittens by litterD  ************************/
  const reservedInLitter = (litterID) => {
    const result = kittenList.filter(
      (kitten) => kitten?.info?.litterID === litterID
    );
    const reserve = result.filter(
      (kitten) => kitten?.info?.status === "reserved"
    );
    const r = Object.keys(reserve).length;
    return r;
  };

  return (
    <KittensContext.Provider
      value={{
        kittenList,
        findKitten,
        getKittenName,
        getKittensByLitterID,
        litterSize,
        availableInLitter,
        soldInLitter,
        reservedInLitter,
      }}
    >
      {children}
    </KittensContext.Provider>
  );
}

export function KittensData() {
  return useContext(KittensContext);
}
