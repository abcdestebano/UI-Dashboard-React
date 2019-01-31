/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import hexagon from '../../assets/hexagon.svg'

// STYLES
import './styles.css';

const Header = () => (
   <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <img src={hexagon} alt="Hexagon" width="50" className="HeaderLogo" />
         <ul className="navbar-nav mr-auto">
            <li className="nav-link"> Dashboard </li>
            <li className="nav-link"> Network </li>
            <li className="nav-link"> Network </li>
            <li className="nav-link"> Network </li>
            <li className="nav-link"> Network </li>
            <li className="nav-link"> Network </li>
            <li className="nav-link link-billing">Billing</li>
            <li className="nav-link"> Network </li>
         </ul>
      </div>
      <ul className="navbar-nav HeaderItems">
         <li className="nav-link"> <i className="fas fa-search color-gray"></i> </li>
         <li className="nav-link"> <i className="far fa-question-circle color-gray"></i> </li>
         <li className="nav-link bell">
            <i className="fas fa-bell"></i>
            <div className="notification">2</div>
         </li>
         <li className="nav-item dropdown">
            <div id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <div className="box-javascript"> JS </div>
               <i className="fas fa-angle-down color-gray"></i>
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <a className="dropdown-item" href="#">Menu</a>
               <a className="dropdown-item" href="#">Menu</a>
            </div>
         </li>
      </ul>
   </nav>
)

export default Header