import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import HomePage from './pages/HomePage';
import AddRiders from './components/AddRiders'
import TimerFunction from './components/TimerFunction';
import DisplayRiders from './components/DisplayRiders';
import Competition from './pages/CompetitionPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerFunction />} />
        <Route path="/addriders" element={<AddRiders />} />
        <Route path="/displayriders" element={<DisplayRiders />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
