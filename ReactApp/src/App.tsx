import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Services} from "./components/Services";
import {content} from "./content";

function App() {
  return (
    <div className="App">
      <Services {...content}/>
    </div>
  );
}

export default App;
