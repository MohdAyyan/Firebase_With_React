import React, { useState } from "react";
import { useFirebase } from "../context/Firebase.jsx";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signupUserWithEmailAndPassword, signInWithGoogle, signInWithGithub } = useFirebase();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { email, password });
    try {
      const result = await signupUserWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      // Add your signup logic here
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#1a1a1a",
          }}
        >
          Sign Up
        </h2>

        <button
           onClick={signInWithGoogle}
          style={{
            width: "100%",
            padding: "0.8rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#f8f8f8";
            e.target.style.borderColor = "#4285f4";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "white";
            e.target.style.borderColor = "#ddd";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l2.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign up with Google
        </button>
        <button
          style={{
            width: "100%",
            padding: "0.8rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#f8f8f8";
            e.target.style.borderColor = "#24292e";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "white";
            e.target.style.borderColor = "#ddd";
          }}
          onClick={signInWithGithub}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#24292e"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          Sign up with GitHub
        </button>
        <div
          style={{
            textAlign: "center",
            margin: "1.5rem 0",
            color: "#666",
            position: "relative",
          }}
        >
          OR
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              width: "40%",
              height: "1px",
              background: "#ddd",
              content: "",
            }}
          ></span>
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              width: "40%",
              height: "1px",
              background: "#ddd",
              content: "",
            }}
          ></span>
        </div>

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              background: "#1877f2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#166fe5")}
            onMouseOut={(e) => (e.target.style.background = "#1877f2")}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: "#666",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#1877f2",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;