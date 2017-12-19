import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import '../styles/Header.css'

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = evt => {
    this.setState({ isOpen: !this.state.isOpen })
    evt.preventDefault()
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href='/'>Product Tracker</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                exact to='/'
                className='item'
                activeClassName='active'
                tag={RRNavLink}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='/report'
                className='item'
                activeClassName='active'
                tag={RRNavLink}
              >
                Report
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header