import { useSelector, useDispatch } from 'react-redux'

import MenuIcon from '../../../../assets/images/icons/menu.svg'
import CloseIcon from '../../../../assets/images/icons/close.svg'
import { setStatusMenuAction } from '../../../../redux/actions/menuManagerAction'

import './index.css'

const Menu = () => {
  const { showMenu } = useSelector(state => state.menuManagerReducer)
  const dispatch = useDispatch()

  const handlerStatusMenu = () => {
    dispatch(setStatusMenuAction(!showMenu))
  }

  return (
    <img
      src={ showMenu ? CloseIcon : MenuIcon }
      alt="menu"
      className="menu__icon"
      onClick={ () => handlerStatusMenu() }
    />
  )
}

export default Menu