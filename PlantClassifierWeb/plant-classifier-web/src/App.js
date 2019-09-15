import React from 'react';
import './App.css';
import Predictions from './Predictions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plant Classifier</h1>
      </header>
      <div id="console"></div>
      
      {/* Load the webcam */}
      <video autoPlay playsInline muted id="webcam" width="224" height="224"></video>
      <button id="class-a">Add A</button>
      <button id="class-b">Add B</button>
      <button id="class-c">Add C</button>
      <Predictions></Predictions>
    </div>
  );
}

export default App;
