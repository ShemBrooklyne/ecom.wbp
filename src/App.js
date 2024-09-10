import React from "react";
import Navbar from "./components/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import Shop from './components/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <FilterSidebar />
    //   {/* Other components go here */}
    // </div>

    <Router>
      <Navbar />
      {/* Place FilterSidebar directly since it's always visible */}
      <FilterSidebar />
      <Routes>
        {/* Define routes for specific pages */}
        <Route path="/Shop" element={<Shop />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
