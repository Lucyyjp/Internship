var moment = require('moment');

let nextCustomerId = 0;

const addCustomer = (info) => ({ type: 'ADD_CUSTOMER', id: nextCustomerId++,
        name: info.name,
        dob: info.dob,
        phoneNumber: info.phoneNumber,
        street: info.street,
        city: info.city,
        state: info.state,
        postCode: info.postCode,
        package: info.package,
        timeAdded: moment().utc(),
      });

const newTimezone = (newTZ) => ({ type: 'CHANGE_TIMEZONE',
        timezone: newTZ.timezone
      });

const deleteCustomers = (ids) => ({ type: 'DELETE_CUSTOMER', customerIds: ids});

export {
  addCustomer,
  newTimezone,
  deleteCustomers
};
