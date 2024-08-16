import React from "react";
import Hangman from "./hangman";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hangman />
      <div className="game-container">
      </div>
    </div>
  );
}

export default App;
