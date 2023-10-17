import React from "react";
import NavigationBar from "./components/navigationBar/navigationBar";
import TopBar from "./components/TopBar/TopBar";
import heroSection from "./components/heroSection/heroSection";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavigationBar/>
      <div className="content">
        <TopBar/>
        <heroSection/>
        
      </div>
    </div>
  );
}

export default App;
