var moment = require('moment');

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
        timeAdded: moment().utc(moment().format("DD-MM-YYYY h:mm:ss A"))
      });

const newTimezone = (newTZ) => ({ type: 'CHANGE_TIMEZONE',
        timezone: newTZ.timezone
      });

export {
  addCustomer,
  newTimezone
};
