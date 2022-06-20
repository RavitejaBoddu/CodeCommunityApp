import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLCleXxGIZSuvog09f9_Wm2heZqD2vfNo",
  authDomain: "auth-development-69cdb.firebaseapp.com",
  projectId: "auth-development-69cdb",
  storageBucket: "auth-development-69cdb.appspot.com",
  messagingSenderId: "1084430985758",
  appId: "1:1084430985758:web:62f0214de4829e3cbbdc0f",
  measurementId: "G-8LBZP52VPY"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app



