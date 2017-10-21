import React, { Component } from 'react';
import logo from './svg/mgmt/sailing-boat.svg';
import wait from './svg/mgmt/wait.svg';
import './App.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Posts App</h1>
        </header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Text>
              Signed in as: <Navbar.Link href="#">TestTest</Navbar.Link>
            </Navbar.Text>
            <button type="button" class="btn btn-default navbar-btn">Sign in</button>
          </Nav>
        </Navbar>
        <p className="App-intro">
          No idea what i'll do <img src={wait}/>
        </p>
      </div>
    );
  }
}

export default App;
