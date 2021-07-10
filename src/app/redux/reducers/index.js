import { combineReducers } from 'redux'

import validationsReducer from './validationsReducer'
import menuManagerReducer from './menuManagerReducer'

export default combineReducers({
  validationsReducer,
  menuManagerReducer
})
