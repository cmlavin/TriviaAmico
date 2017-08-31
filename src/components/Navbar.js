import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <div>
      <NavLink to="/"><h3>Home</h3></NavLink>
    </div>
  )
}

export default Navbar;
