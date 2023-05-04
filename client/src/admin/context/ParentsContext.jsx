import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const ParentsContext = createContext();

export function ParentsContextProvider({ children }) {
  const [parentList, setParentList] = useState([]);

  /*******************  Get Parents from db  ************************/
  useEffect(() => {
    try {
      onSnapshot(query(collection(db, "parents")), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          info: { ...doc.data() },
        }));
        setParentList(data);
        console.log("Parent were loaded from db");
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  /*******************  Find  Parent by ID  ************************/
  const findParent = (id) => {
    const result = parentList.find((parent) => parent.id === id);
    return result;
  };

  /*******************  Get Parent's name by ID  ************************/
  const getParentName = (id) => {
    const result = findParent(id);
    return result.info.name;
  };

  return (
    <ParentsContext.Provider value={{ parentList, findParent, getParentName }}>
      {children}
    </ParentsContext.Provider>
  );
}

export function ParentsData() {
  return useContext(ParentsContext);
}
