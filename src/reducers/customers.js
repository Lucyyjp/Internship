import React from 'react'
import { connect } from 'react-redux'
import {createStore} from 'redux';

let nextCustomerId = 0;

const addCustomer = (info) => ({ type: 'ADD_CUSTOMER', id: nextCustomerId++,
        name: info.name,
        dob: info.dob,
        phoneNumber: info.phoneNumber,
        street: info.address,
        city: info.city,
        state: info.state,
        postCode: info.postCode,
        package: info.package,
        timeAdded: Date()
      });

const initialState = {
  customers: [[0, '', '2'],[1, '', '02/56'],[3, '', '15'],[4, '', '31'],[5, '', '14']]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      console.log(state.customers)
      return {
        ...state,
        customers: [...state.customers,
          [
            action.id,
            action.name,
            action.dob,
            action.phoneNumber,
            action.address,
            action.city,
            action.state,
            action.postCode,
            action.package,
            action.timeAdded
          ]]
      };
      default:
      console.log("default")
        return state;
  }
}

export {
  reducer,
  addCustomer
};
