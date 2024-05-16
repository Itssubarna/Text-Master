import React from 'react';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        {/* Add your navbar content here, such as links or a logo */}
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <body className="body">
        {/* Add your main content here */}
        <h1>TextMaster</h1>
        <textarea
          placeholder="Enter your text here..."
        />
        <button>Paraphrase</button>
        <div className="output">
          <h2>Paraphrased Text:</h2>
          <p>...</p>  {/* Placeholder for paraphrased text */}
        </div>
      </body>
    </div>
  );
}

export default App;