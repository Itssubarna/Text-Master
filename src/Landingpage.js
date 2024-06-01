import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="content">
        <h1 className="animated-heading">
          Welcome to <span className="highlight">TextMaster</span>
        </h1>
        <p className="animated-paragraph">
          Reach new markets with high-quality translation services.
        </p>
        <Link to="/app" className="cta-button">Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;
