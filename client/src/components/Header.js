import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => (
  <div>
    <h1>Product Tracker</h1>
    <ul>
      <li>
        <NavLink exact to='/'
          className='item'
          activeClassName='active'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/report'
          className='item'
          activeClassName='active'
        >
          Report
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Header