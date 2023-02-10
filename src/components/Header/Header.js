import React from 'react';
import '../../Styles/style.css';
import logo from '../images/logo.png'
import MenuItem from './MenuItem';


function Header() {
  return (
    <div className='container' id='header'>

      <nav id='navbar' className="navbar navbar-expand-md justify-content-between">

        <div className="container-fluid">

          <img src={logo} alt="" className='logo' />

        </div>


        <MenuItem></MenuItem>

      </nav>

    </div>
  )
}
export default Header;