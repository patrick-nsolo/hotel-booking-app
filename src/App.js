import React from "react";
import NavigationBar from "./components/navigationBar/navigationBar";
import TopBar from "./components/TopBar/TopBar";

 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavigationBar/>
      <div className="content">
        <TopBar/>
      </div>
    </div>
  );
}

export default App;
