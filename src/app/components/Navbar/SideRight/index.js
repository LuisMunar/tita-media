import { useSelector } from 'react-redux'
import { useTransition, animated, config } from 'react-spring'

import NavbarLink from './NavbarLink'
import Logo from '../SideLeft/Logo'
import Menu from '../SideLeft/Menu'
import SearchIcon from '../../../assets/images/icons/Search@2x.png'

import { PAGES_PATH } from '../../../constants/pageConstants'

import './index.css'

const SideRight = () => {
  const { showMenu } = useSelector(state => state.menuManagerReducer)

  const renderPagesLinks = () => (
    PAGES_PATH.map((page) => <NavbarLink key={ page.name } dataPath={ page } handlerMenu={ true } />)
  )

  const renderSideRight = () => (
    <div className="side-right">
      <div className="side-right__logo-menu">
        <Logo />
        <Menu />
      </div>

      { renderPagesLinks() }

      <img src={ SearchIcon } alt="search" className="side-right__icon-search cursor-pointer" />
    </div>
  )

  const transitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 1,
    config: config.molasses,
  })

  return transitions(
    (styles, item) => item &&
    <animated.div style={styles}>
      { renderSideRight() }
    </animated.div>
  )
}

export default SideRight