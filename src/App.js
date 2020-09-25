import React from 'react';
import './app.css';
import { NavBar, Name, Main } from "./components";

function App() {
  return (
    <div id="app" className="d=flex flex-column h-100 App">
      <NavBar />
      <Name />
      <Main />
    </div>
  );
}

export default App;