import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";

// import components
import Home from "./Components/Home";
import Alumni from "./Components/Alumni";
import Details from "./Components/Details";

// import json file
import students from "./json/students_All.json";

// contexts
export const Data = createContext();

function App() {
  return (
    <div className="App">
      {/* provide data after sort it by cycle number */}
      <Data.Provider value={students.sort((a, b) => a.cycle - b.cycle)}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/alumni" element={<Alumni />}></Route>
          <Route path="/alumni/:id" element={<Details />}></Route>
        </Routes>
      </Data.Provider>
    </div>
  );
}

export default App;
