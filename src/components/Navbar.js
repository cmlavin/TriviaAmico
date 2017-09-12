import React from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <div>
      <NavLink to="/"><Icon name='home' size='large' />Home</NavLink>
      <NavLink to="/"><Icon name='power' size='large' />Logout</NavLink>
    </div>
  )
}

export default Navbar;

//<NavLink to="/me"><h3><Icon name='dashboard' />User Dashboard</h3></NavLink>
