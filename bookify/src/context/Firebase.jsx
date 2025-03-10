import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { useState, useEffect } from "react";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {getStorage, ref, uploadBytes} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDtMs0uhZ70lgINXYcuoC1W89rmZmdDIhE",
  authDomain: "bookify-2427b.firebaseapp.com",
  projectId: "bookify-2427b",
  storageBucket: "bookify-2427b.firebasestorage.app",
  messagingSenderId: "308473558454",
  appId: "1:308473558454:web:a56c808a35b7cfcbaafd17"
};

const firebaseApp = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    
  onAuthStateChanged(firebaseAuth,(user)=>{
    console.log("User :",user);
    if(user){
      setUser(user)
    }else{
      setUser(null)
    }
  })
    
  }, [])
  
const isLoggedIn = user ? true : false;

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(firebaseAuth, googleProvider);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      // Handle error (e.g., show error message to user)
    }
  }

  const signInWithGithub = async () => {
    try {
      return await signInWithPopup(firebaseAuth, githubAuthProvider);
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
      // Handle error (e.g., show error message to user)
    }
  }

const handleUpload =async(bookName,isbn,price,coverPic)=>{
  const imageRef = ref(storage, `uploads/images/${bookName}`);
  const uploadResult=await uploadBytes(imageRef, coverPic);
  await addDoc(collection(firestore, "books"),{
    bookName,
    isbn,
    price,
    coverPic: uploadResult.metadata.fullPath,
    userID: user.uid,
    userEmail: user.email
  })
}

  return (
    <FirebaseContext.Provider value={{ handleUpload, signupUserWithEmailAndPassword, signInUserWithEmailAndPassword, signInWithGoogle, signInWithGithub, isLoggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default firebaseApp;