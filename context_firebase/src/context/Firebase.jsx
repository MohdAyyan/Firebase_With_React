// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBZHznDlcNe-e1ZD6o_HgdJs01WL6rLP9M",
  authDomain: "context-app-409ed.firebaseapp.com",
  projectId: "context-app-409ed",
  storageBucket: "context-app-409ed.firebasestorage.app",
  messagingSenderId: "701455574436",
  appId: "1:701455574436:web:f4006fc23431d0d9e8cd31"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const firebaseContext = createContext(null);

export const useFirebase = ()=>useContext(firebaseContext);
export const FirebaseProvider = (props)=>{
   
 const signupUserWithEmailAndPassword = (email,password)=>{
      return createUserWithEmailAndPassword(firebaseAuth,email,password)
   }
    return (
        <firebaseContext.Provider value={signupUserWithEmailAndPassword} >
            {props.children}
        </firebaseContext.Provider>
    )
}


