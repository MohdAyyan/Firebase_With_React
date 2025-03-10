// HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: 'white',
          margin: 0,
          fontSize: '1.5rem'
        }}>Bookify</h1>
        <nav style={{
          display: 'flex',
          gap: '1.5rem'
        }}>
          <a href="/books/list" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >Add Books</a>
          <a href="/books" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >View Books</a>
          <a href="/register" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >Sign Up</a>
          <a href="/login" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >Sign In</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(to right, #3498db, #2c3e50)',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>Welcome to Bookify</h2>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>Discover, read, and share your favorite books with our community</p>
        <button style={{
          padding: '0.8rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >Get Started</button>
      </section>

      {/* Featured Books Section */}
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>Featured Books</h3>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['Book 1', 'Book 2', 'Book 3'].map((book, index) => (
            <div key={index} style={{
              width: '200px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              padding: '1rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '200px',
                background: '#ddd',
                borderRadius: '4px',
                marginBottom: '1rem'
              }}></div>
              <h4 style={{ margin: '0 0 0.5rem' }}>{book}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Author Name</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Bookify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;