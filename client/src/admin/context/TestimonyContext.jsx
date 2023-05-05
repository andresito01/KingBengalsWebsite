import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const TestimonyContext = createContext();

export function TestimonyContextProvider({ children }) {
  const [testimonyList, setTestimonyList] = useState([]);

  /*******************  Get Testimonies from db  ************************/
  useEffect(() => {
    try {
      onSnapshot(query(collection(db, "testimonies")), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          info: { ...doc.data() },
        }));
        setTestimonyList(data);
        console.log("testimonies were loaded from db");
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <TestimonyContext.Provider value={{ testimonyList }}>
      {children}
    </TestimonyContext.Provider>
  );
}

export function TestimonyData() {
  return useContext(TestimonyContext);
}
