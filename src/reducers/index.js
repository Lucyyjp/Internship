import { combineReducers } from 'redux'
import customersReducer from './customers'
import timeZoneReducer from './timezone'

const reducers = combineReducers({
  customersObj: customersReducer,
  timezoneObj: timeZoneReducer
})

export default reducers
