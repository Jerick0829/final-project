// client/src/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Updated component */}
        <Route path="/" element={<Home />} /> {/* Updated route definition */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
