import React from 'react';
import './App.css';

import { NavBar, Name, Projects } from "./components";

function App() {
  return (
    <div id="app" className="d=flex flex-column h-100 App">
      <NavBar />
        <Name />
      <Projects />
    </div>
  );
}

export default App;