// Headerbar navigation

import React from 'react';
import '../App.css';
import {
  Navbar
} from 'react-bootstrap';
import NavLink from './NavLink.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import NewCustomer from './NewCustomer'
import Customers from './Customers'

const NavBar = ({ title, tag }) => (
    <Router>
      <div>
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
          <Navbar.Brand href={tag}>
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Dropdown links */}
            <NavLink title="Home" tag="#home" path="/"/>
            <NavLink title="Add New Customer" tag="#newCustomer" path="/newCustomer"/>
            <NavLink title="Existing Customers" tag="#customers" path="/customers"/>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* Page paths */}
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> />
          <Route exact path="/newCustomer">
            <NewCustomer />
          </Route>/>
        <Route exact path="/customers">
          <Customers />
        </Route>
        </Switch>
      </div> 

    </Router>
  );

export default NavBar
