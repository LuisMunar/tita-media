import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useTransition, animated, config } from 'react-spring'

import Logo from '../SideLeft/Logo'
import Menu from '../SideLeft/Menu'
import SearchIcon from '../../../assets/images/icons/Search@2x.png'

import './index.css'

const SideRight = () => {
  const { showMenu } = useSelector(state => state.menuManagerReducer)

  const pagesPath = [
    {
      path: '/',
      text: 'All'
    },
    {
      path: '/branding',
      text: 'Branding'
    },
    {
      path: '/web',
      text: 'Web'
    },
    {
      path: '/photography',
      text: 'Photography'
    },
    {
      path: '/app',
      text: 'App'
    }
  ]

  const renderPagesLinks = () => (
    pagesPath.map((page) => <NavLink key={ page.text } exact to={ page.path } className="side-right__link" activeClassName="side-right__link--active">{ page.text }</NavLink>)
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