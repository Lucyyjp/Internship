var moment = require('moment-timezone');

const initialState = {
  timezone: moment.tz.guess()
};

const timeZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TIMEZONE':
      return {
        ...state,
        timezone: action.timezone
      };
      default:
        return state;
  }
}

export default timeZoneReducer
