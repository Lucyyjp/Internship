// Page of existing customers

import React from 'react';
import '../App.css';
import {
  Badge,
} from 'react-bootstrap';
import CustomerTable from '../containers/CustomerTable.js'

const Customers = ({}) => (
  <div>
    {/* Title */}
    <div className="text-center" style={{marginTop: 2 + 'em'}}>
      <h1>
        <Badge variant="dark" center="true">
          Customers
        </Badge>
      </h1>
    </div>

    {/* Customers in the system */}
    <h5 className="text-center" style={{marginTop: 2 + 'em'}}>
      Add different sorting for birthdays, delete customer
    </h5>

    <div style={{marginLeft: 3+'em', marginRight: 3+'em', marginTop: 2 + 'em', marginBottom: 5+'em'}}>
      <CustomerTable/>
    </div>

  </div>
)

export default Customers;
