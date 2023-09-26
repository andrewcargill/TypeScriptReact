import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import TimerFunction from './components/TimerFunction';

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerFunction />} />
      </Routes>
    </Router>
  );
}

export default App;
