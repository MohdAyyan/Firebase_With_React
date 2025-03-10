import { useState } from 'react'
import app from "./Firebase.js"
import {getFirestore, collection, addDoc, updateDoc ,getDocs,getDoc, query, where, doc} from "firebase/firestore"

const firestore = new getFirestore(app)
function App() {
  
  const writeData =async()=>{
    const result =await addDoc(collection(firestore, "cities"),{
      name: "Tokyo",
      country: "Japan",
      lat: "35.6895",
      long: "139.6917"
    })
    console.log("Result :",result);
    
  }

const makesSubCollection = async () => {
  await addDoc(collection(firestore,"cities/hqhkRljl93mbkRW7LYW1/places"),{
    name:"Tokyo Tower",
    lat:"35.6586",
    long:"139.7455",
    description:"Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan. At 332.9 meters, it is the second-tallest structure in Japan."
  })
};

const getDocument = async () => {
  const ref = doc(firestore, "cities", "hqhkRljl93mbkRW7LYW1");
  const docSnap = await getDoc(ref);
  console.log(docSnap);
  console.log(docSnap.data());
}

const getDocByQuery = async () => {
  const collectionRef = collection(firestore, "cities");
  const q = query(collectionRef, where("country", "==", "Japan"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => console.log(doc.data()));
  
}

const updateDocs = async() =>{
  const docRef = doc(firestore, "cities", "hqhkRljl93mbkRW7LYW1");
  await updateDoc(docRef, {
    country: "Japan",
    lat: "35.6895",
    long: "139.6917"
  });

}

  return (
    <div className="App">
      <h1>Firebase FireStore</h1>
      <button onClick={writeData}>Write Data</button>
      <button onClick={makesSubCollection}>Puts Data</button>
      <button onClick={getDocument}>Get Data</button>
      <button onClick={getDocByQuery}>Get Data By Query</button>
      <button onClick={updateDocs}>Update Data</button>
     </div>
  )
}

export default App
