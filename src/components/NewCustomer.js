// New customer page

import React from 'react';
import '../index.css';
import {
  Badge,
} from 'react-bootstrap';
import NewCustomerForm from '../containers/AddCustomer'

const NewCustomer = () => (
  <div>
    {/* Title */}
    <div className="text-center" style={{marginTop: 2 + 'em'}}>
      <h1>
        <Badge variant="success" center>New Cutomer</Badge>
      </h1>
      <h6>
        Fill in the form below to add a new customer to the system
      </h6>
    </div>

    {/* Input Form */}
    <div style={{marginBottom: 5 + 'em'}}>
      <NewCustomerForm />
    </div>
  </div>
  )

  export default NewCustomer;
