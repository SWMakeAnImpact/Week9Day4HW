import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation

function Navigation() {
  // Render navigation links
  return (
    <nav>
      <Link to="/">Home</Link> {/* Link to the homepage */}
      <Link to="/about">About</Link> {/* Link to the about page */}
      <Link to="/stocks">Dashboard</Link> {/* Link to the dashboard page */}
      {/* You can add any other navigation links here */}
    </nav>
  );
}

export default Navigation; // Export the Navigation component