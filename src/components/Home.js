// Home Page

import React from 'react';
import '../App.css';
import {
  Button,
  Badge,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import BirthdayGraph from './BirthdayGraph.js'

const Home = ({}) => (
  <div>
    {/* Title */}
    <div className="text-center" style={{marginTop: 2 + 'em'}}>
      <h1>
        <Badge variant="primary" center>Home</Badge>
      </h1>
    </div>

    {/* User Birthdays */}
    <Card className="text-center" style={{marginLeft: 3+'em', marginRight: 3+'em', marginTop: 1+'em'}}>
    <Card.Body>
      <Card.Title>Customer Birthdays</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Representation of how many users have a birthday on each day of the month</Card.Subtitle>
      <Card.Text>
      <div style={{ marginTop: 2+'em'}}>
        <BirthdayGraph />
      </div>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* Timezone selection */}
  <Card className="text-center" style={{marginLeft: 3+'em', marginRight: 3+'em', marginTop: 1+'em', marginBottom: 5+'em'}}>
  <Card.Body>
    <Card.Title>Change Timezone</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Current timezone: {/* Add here */}</Card.Subtitle>
    <Card.Text>
      Add fields to change timezone/ create timezone object
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

  </div>
)

export default Home;
