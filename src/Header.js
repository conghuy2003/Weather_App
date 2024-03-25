import React, { Component } from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Weather } from './Weather';
export class Header extends Component {
  render() {
    return (
      <div>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Weather'>Weather</Link></li>
          <li><Link to='/AuthLogin'>Login</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header