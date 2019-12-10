// Page of existing customers

import React from 'react';
import '../App.css';
import {
  Button,
  Badge,
  Row,
  Col,
  Card
} from 'react-bootstrap';

const Customers = ({}) => (
  <div>
    {/* Title */}
    <div className="text-center" style={{marginTop: 2 + 'em'}}>
      <h1>
        <Badge variant="dark" center>
          Customers ({"Add no. of customers here"})
        </Badge>
      </h1>
    </div>

    {/* Customers in the system */}
    <h5 className="text-center" style={{marginTop: 2 + 'em'}}>
      Search query with dropdown for finding search field
    </h5>

    <h5 className="text-center" style={{marginTop: 2 + 'em'}}>
      Create sortable table
    </h5>

    <h5 className="text-center" style={{marginTop: 2 + 'em'}}>
      Create table
    </h5>

  </div>
)

export default Customers;
