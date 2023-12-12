// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css'; // Make sure you have the correct path to your Home.css file

const Home = () => {
  return (
    <div className="home-container"> {/* Use a CSS class for styling */}
      <h1>Welcome to the Home Page</h1>
      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-primary m-2">Go to Dashboard</Link>
        <Link to="/profile" className="btn btn-success m-2">View Profile</Link>
        <Link to="/register" className="btn btn-warning m-2">Register</Link>
        <Link to="/login" className="btn btn-danger m-2">Login</Link>
      </div>
    </div>
  );
};

export default Home;
