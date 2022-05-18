import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Issue from './Component/Issue/Issue';
import { useSelector } from 'react-redux';
import Protected from './Component/ProtectedRoute/ProtectedRoute';

function App() {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protected isLoggedIn={isAuth}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/create_issue"
            element={
              <Protected isLoggedIn={isAuth}>
                <Issue />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
