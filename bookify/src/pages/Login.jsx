import  { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFirebase } from '../context/Firebase.jsx'

function Login() {
   const [email, setEmail]  = useState('');
   const [password, setPassword] = useState('');
   const firebase = useFirebase();
  const navigate = useNavigate();
   useEffect(() => {
     if (firebase.isLoggedIn ) {
      navigate("/")
     }
   },[firebase, navigate])
   const handleSubmit = async(e) => {
    e.preventDefault();
    await firebase.signInUserWithEmailAndPassword(email, password);
    console.log('Signin attempt: Successfully', { email, password });
    setEmail("")
    setPassword("")
   }
    return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f2f5'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px'
          }}>
            <h2 style={{
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#1a1a1a'
            }}>Sign In</h2>
    
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
    
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
    
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: '#1877f2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#166fe5'}
                onMouseOut={(e) => e.target.style.background = '#1877f2'}
                
              >
                Sign In
              </button>
            </form>
    
            <p style={{
              textAlign: 'center',
              marginTop: '1.5rem',
              color: '#666'
            }}>
              Don't have an account?{' '}
              <a href="/signup" style={{
                color: '#1877f2',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      );
}

export default Login