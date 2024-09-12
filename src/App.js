import React from "react";
import Navbar from "./components/navbar/Navbar";
import Shop from './components/shop/Shop';
import FilterSidebar from "./components/sidebar/FilterSidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                {/* <FilterSidebar /> Always displayed */}
                <div className="content-area">
                    <Routes>
                        <Route path="/" element={<Shop />} /> {/* Default route */}

                        <Route path="/shop" element={<Shop />} />
                        {/* Add other routes here */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
