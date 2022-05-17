import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Issue from './Component/Issue/Issue';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create_issue" element={<Issue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
