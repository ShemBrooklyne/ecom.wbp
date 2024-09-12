import React from "react";
import Navbar from "./components/Navbar";
import Shop from './components/Shop';
import FilterSidebar from "./components/FilterSidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/Shop" element={<Shop />} />
//                 {/* Add other routes here */}
//             </Routes>
//         </Router>
//     );
// }


function App() {
  return (
      <Router>
          <Navbar />
          <div className="app-container">
              <FilterSidebar /> {/* Always displayed */}
              <div className="content-area">
                  <Routes>
                      <Route path="/shop" element={<Shop />} />
                      {/* Add other routes here */}
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;
