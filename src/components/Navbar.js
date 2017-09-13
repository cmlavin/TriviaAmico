import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Navbar = (props) => {
  return(
    <div>
      <Link to="/"><Button id="navbarHomeButton" content='Home' icon='home' labelPosition='left' /></Link>
      <Link to="/"><Button id="navbarLogoutButton" content='Logout' icon='power' labelPosition='left' onClick={props.logout}/></Link>
    </div>
  )
}

export default Navbar;

//<NavLink to="/me"><h3><Icon name='dashboard' />User Dashboard</h3></NavLink>
