import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutme'>About</Link></li>
        <li><Link to='/education'>Education</Link></li>
        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>

      </ul>
    </nav>
  )
}

export default navbar;