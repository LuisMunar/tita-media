import { SET_STATUS_MENU } from '../types/menuManagerTypes'

export const setStatusMenuAction = (payload) => {
  return (dispatch) => {
    dispatch(setStatusMenu(payload))
  }
}

const setStatusMenu = (payload) => ({
  type: SET_STATUS_MENU,
  payload
})