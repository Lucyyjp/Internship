var moment = require('moment-timezone');

const initialState = {
  customers: [[34, 'Lucy', '02/88/23','','','','','','', moment().utc(moment().format("DD-MM-YYYY h:mm:ss A"))],
  [1, 'Darcy', '02/56/89', '','','','','','', moment(1511103133589).utc(moment().format("DD-MM-YYYY h:mm:ss A"))],
  [2, 'Sean', '15/23/23', '','','','','','', moment(1542103133589).utc(moment().format("DD-MM-YYYY h:mm:ss A"))],
  [3, 'Teresa', '31/23/90', '','','','','','', moment(1521103133589).utc(moment().format("DD-MM-YYYY h:mm:ss A"))],
  [4, 'Tim', '14/56/12', '','','','','','', moment(1522103133589).utc(moment().format("DD-MM-YYYY h:mm:ss A"))]]
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        customers: [...state.customers,
          [
            action.id,
            action.name,
            action.dob,
            action.phoneNumber,
            action.street,
            action.city,
            action.state,
            action.postCode,
            action.package,
            action.timeAdded
          ]]
      };
    case 'DELETE_CUSTOMER':
      let newCustomerList = state.customers;
      let deleteIds = action.customerIds;
      for(let i=0; i<state.customers.length; i++) {
        if(newCustomerList[i][0] === deleteIds) {
          this.props.customers.slice(i)
          console.log(i)
          i--
        }
      }
      return {
        ...state,
        customers: newCustomerList
      }
      default:
        return state;
  }
}

export default customersReducer
