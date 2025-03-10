import { useState } from 'react'
import { useFirebase } from './context/Firebase.jsx'
import { useEffect } from 'react'
import './App.css'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'
import { FirebaseProvider } from './context/Firebase.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'

const auth = getAuth();
function App() {

  const [user,setUser] = useState(null)
  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user)=>{
      if(user){
         console.log(user)
         setUser(user)
      }
      else{
        console.log("You are logged out");
        setUser(null)
      }
    })
  },[])

  if (user === null) {
    return (
      <div className="App">
        <Signup/>
        <Signin/>
      </div>
    );
    
  }

  return (
    <FirebaseProvider>
      <h1>hello {user.email}</h1>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </FirebaseProvider>
  );
};
export default App
