// TextMaster.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './textmaster.css';

function TextMaster() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleParaphrase = () => {
    setOutputText(inputText);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const maxWords = 600;

  return (
    <div className="text-master-container">
      {/* Use Link to navigate to the landing page */}
      <Link to="/" className="textmaster-text" style={{ textDecoration: 'none' }}>TextMaster</Link>
      <div className="main-content">
        <div className="input-box">
          <h2>Enter Text</h2>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your text here..."
            className="text-area"
          />
          <div className="word-count">{countWords(inputText)}/{maxWords}</div>
        </div>
        <div className="output-box">
          <h2>Summarized Text</h2>
          <p className="summarized-text">{outputText}</p>
          <div className="word-count">{countWords(outputText)}/{maxWords}</div>
        </div>
      </div>
      <button onClick={handleParaphrase} className="action-button">
      Summarize
    </button>

    </div>
  );
}

export default TextMaster;
