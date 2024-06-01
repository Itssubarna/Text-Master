import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextMaster from './textmaster';
import LandingPage from './Landingpage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<TextMaster />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
