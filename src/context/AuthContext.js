import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password, name) => {
    const result = await auth.createUserWithEmailAndPassword( email, password);
    result.user.updateProfile({
      displayName: name
    })
    await result.user.sendEmailVerification();
  }

  const verify = (auth) => {
    sendEmailVerification(auth.currentUser);

  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };
  const facebookSignIn = () => {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        login,
        loggedIn,
        setLoggedIn,
        googleSignIn,
        facebookSignIn,
        signup,
        verify
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
