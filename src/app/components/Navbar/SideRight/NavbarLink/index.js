import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { setStatusMenuAction } from '../../../../redux/actions/menuManagerAction'

import './index.css'

const NavbarLink = ({ dataPath, handlerMenu }) => {
  const { showMenu } = useSelector(state => state.menuManagerReducer)
  const { isMobile } = useSelector(state => state.validationsReducer)
  const dispatch = useDispatch()

  const handlerStatusMenu = () => {
    isMobile && handlerMenu && dispatch(setStatusMenuAction(!showMenu))
  }

  return <NavLink
    exact
    to={ dataPath.path }
    className="navbar-link__link"
    activeClassName="navbar-link__link--active"
    onClick={ () => handlerStatusMenu() }
  >
    { dataPath.text }
  </NavLink>
}

export default NavbarLink