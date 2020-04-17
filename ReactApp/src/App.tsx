import React from 'react';
import './App.css';
import {Services} from "./pages/Services";
import {content} from "./pages/content";

function App() {
  return (
    <div className="App">
      <Services {...content}/>
    </div>
  );
}

export default App;
