// All app components

import React from 'react';
import '../App.css';
import NavBar from './NavBar.js';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import reducers from '../reducers/index.js'
import customersReducer from '../reducers/customers.js'
import timeZoneReducer from '../reducers/timezone.js'

//const store = createStore(customersReducer);
//const store = createStore(timeZoneReducer);
const store = createStore(reducers);

class App extends React.Component {
  render() {
  return (
  //<Provider store={ store }>
  <Provider store={ store }>
    <NavBar title="Birthday Package Customers" tag="navbar" />
</Provider>
  );
}}

export default App;
