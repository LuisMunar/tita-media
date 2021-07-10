import { SET_IS_MOBILE } from '../types/validationsTypes'

export const setIsMobileAction = (payload) => {
  return (dispatch) => {
    dispatch(setIsMobile(payload))
  }
}

const setIsMobile = (payload) => ({
  type: SET_IS_MOBILE,
  payload
})