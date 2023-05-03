import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const LittersContext = createContext();

export function LittersContextProvider({ children }) {
  const [litterList, setLitterList] = useState([]);

  /*******************  Get Litters from db  ************************/
  useEffect(() => {
    try {
      onSnapshot(query(collection(db, "litters")), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          info: { ...doc.data() },
        }));
        setLitterList(data);
        console.log("litters were loaded from db");
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  /*******************  Find Litter by ID  ************************/
  const findLitter = (id) => {
    const result = litterList.find((litter) => litter.id === id);
    return result;
  };

  /*******************  Get Litter's name by ID  ************************/
  const getLitterName = (id) => {
    const result = findLitter(id);
    return result.info.name;
  };

  return (
    <LittersContext.Provider
      value={{
        litterList,
        findLitter,
        getLitterName,
      }}
    >
      {children}
    </LittersContext.Provider>
  );
}

export function LittersData() {
  return useContext(LittersContext);
}
