import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  // Update everytime user changes state
  useEffect(() => {
    const usubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        try {
          onSnapshot(query(collection(db, "admins")), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            // console.log(data[0].admin);
            setIsAdmin(data[0].admin);
          });
        } catch (err) {
          console.log(err);
          return setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    return () => {
      usubscribed();
    };
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function UserAdmin() {
  return useContext(AdminContext);
}
