import { SET_IS_MOBILE } from '../types/validationsTypes'

const initialState = {
  isMobile: false
}

const validationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload
      }
  
    default:
      return state
  }
}

export default validationsReducer