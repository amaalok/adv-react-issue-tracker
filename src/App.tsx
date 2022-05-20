import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Issue from './Component/Issue/Issue';
import CreateProject from './Component/CreateProject/CreateProject';
import Protected from './Component/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Protected isLoggedIn={localStorage.getItem('isAuth')}>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protected isLoggedIn={localStorage.getItem('isAuth')}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/create_issue"
            element={
              <Protected isLoggedIn={localStorage.getItem('isAuth')}>
                <Issue />
              </Protected>
            }
          />
          <Route
            path="/create_project"
            element={
              <Protected isLoggedIn={localStorage.getItem('isAuth')}>
                <CreateProject />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
