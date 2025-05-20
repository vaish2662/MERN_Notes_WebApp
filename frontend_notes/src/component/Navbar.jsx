import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();
    const linkClasses = (path) =>
        `px-4 py-2 rounded-lg ${
          location.pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        } transition`;
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">📝 NotesApp</h1>
        <div className="space-x-4">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/create" className={linkClasses("/create")}>
            Create
          </Link>
          <Link to="/signup" className={linkClasses("/signup")}>
            Sign Up
          </Link>
          <Link to="/signin" className={linkClasses("/signin")}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
