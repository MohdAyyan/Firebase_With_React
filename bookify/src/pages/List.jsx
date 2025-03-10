import React, { useState } from "react";
import { useFirebase } from "../context/Firebase.jsx";
function List() {
  const [bookName, setBookName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [preview, setPreview] = useState(null);
  const firebase = useFirebase();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverPic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book data:", { bookName, isbn, price, coverPic });
    // Add your book upload logic here (e.g., API call)
    await firebase.handleUpload(bookName, isbn, price, coverPic);
    setBookName("")
    setCoverPic("")
    setIsbn("")
    setPrice("")
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2c3e50",
          }}
        >
          Upload a Book
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Book Name */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Book Name
            </label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
              placeholder="Enter book name"
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

          {/* ISBN Number */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              ISBN Number
            </label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
              placeholder="Enter ISBN (e.g., 978-3-16-148410-0)"
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

          {/* Price */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Price ($)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              step="0.01"
              placeholder="Enter price"
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

          {/* Cover Picture */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Cover Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
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
            {preview && (
              <img
                src={preview}
                alt="Cover preview"
                style={{
                  maxWidth: "100%",
                  marginTop: "1rem",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2980b9")}
            onMouseOut={(e) => (e.target.style.background = "#3498db")}
          >
            Upload Book
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: "#666",
          }}
        >
          Back to{" "}
          <a
            href="/"
            style={{
              color: "#3498db",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Home
          </a>
        </p>
      </div>
    </div>
  );
}

export default List;
