import React from "react";
import "./App.css"; // Import a CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">MyWebsite</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>Your journey to an amazing experience starts here.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Feature One</h3>
            <p>This is a description of the first feature.</p>
          </div>
          <div className="card">
            <h3>Feature Two</h3>
            <p>This is a description of the second feature.</p>
          </div>
          <div className="card">
            <h3>Feature Three</h3>
            <p>This is a description of the third feature.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;