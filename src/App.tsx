import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import AddRiders from './components/AddRiders'
import TimerFunction from './components/TimerFunction';
import DisplayRiders from './components/DisplayRiders';

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerFunction />} />
        <Route path="/addriders" element={<AddRiders />} />
        <Route path="/displayriders" element={<DisplayRiders />} />
      </Routes>
    </Router>
  );
}

export default App;
