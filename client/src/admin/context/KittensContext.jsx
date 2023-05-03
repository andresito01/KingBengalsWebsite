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

  return (
    <KittensContext.Provider
      value={{
        kittenList,
        findKitten,
        getKittenName,
      }}
    >
      {children}
    </KittensContext.Provider>
  );
}

export function KittensData() {
  return useContext(KittensContext);
}
