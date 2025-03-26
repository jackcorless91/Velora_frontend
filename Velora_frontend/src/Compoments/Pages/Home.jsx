import React from 'react';
import Navbar from '../Menu/Navbar';
import './Home.css';

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">VELORA</h1>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
