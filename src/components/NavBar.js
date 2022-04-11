import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  return (
    <div className="navbar_links">
      <Link to ='/home' style={linkStyle}> Home </Link>
      <Link to='/resume' style={linkStyle}> Resume </Link>
      <Link to='/past' style={linkStyle}> Past </Link>
      <Link to='/present' style={linkStyle}> Present </Link>
      <Link to='/future' style={linkStyle}> Future </Link>
    </div>
  )
}

export default NavBar;