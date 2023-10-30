import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PokerTable from './PokerTable';
import './App.css';

function App ()
 {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path = "/poker-table" element={<PokerTable />} />
            </Routes>
        </Router>
    );
 }

 export default App;


