// All app components

import React from 'react';
import '../App.css';
import NavBar from './NavBar.js';
import { Provider } from 'react-redux'
import { reducer } from '../reducers/customers.js'
import { connect } from 'react-redux'
import {createStore} from 'redux';

const store = createStore(reducer);

function App() {
  return (
  //<Provider store={ store }>
  <Provider store={ store }>
    <NavBar title="Birthday Package Customers" tag="navbar" />
</Provider>
  );
}

export default App;
