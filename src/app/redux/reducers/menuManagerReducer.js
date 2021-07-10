import { SET_STATUS_MENU } from '../types/menuManagerTypes'

const initialState = {
  showMenu: true
}

const manuManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS_MENU:
      return {
        ...state,
        showMenu: action.payload
      }
  
    default:
      return state
  }
}

export default manuManagerReducer