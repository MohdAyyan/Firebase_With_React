import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import app from "./firebase.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import SigninPage from "./pages/SigninPage.jsx"

const auth = new getAuth()
function App() {
  
  const SignUpUser =()=>{
  createUserWithEmailAndPassword(auth, "one@one.com", "oneone").then((value)=> console.log(value))
  }

  return (
    <div>
    <SignupPage/>
    <SigninPage/> 
    </div>
  )
}

export default App
