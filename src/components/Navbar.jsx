import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">CourseApp</Link>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/dashboard" className="px-4">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
