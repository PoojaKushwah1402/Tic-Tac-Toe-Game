import { BrowserRouter } from "react-router-dom";
import './App.css';
import React from "react";
import Main from "./Components/index";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </div>
  );
}

export default App;
