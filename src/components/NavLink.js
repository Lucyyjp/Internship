// HTML navigation links

import React from 'react';
import '../App.css';
import {
  Nav
} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

const NavLink = ({ title, path, tag }) => (
  <Nav.Item>
    <Nav.Link
      as={Link}
      to={path}
      href={tag}
      >
      {title}
    </Nav.Link>
  </Nav.Item>
);

export default NavLink
