import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  function logOut() {
    return signOut(auth);
  }

  // Update everytime user changes state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        GoogleSignIn,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
