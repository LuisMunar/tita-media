import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { MAX_WIDTH_MOBILE } from './constants/validations'
import { setIsMobileAction } from './redux/actions/validationsAction'
import MainLayout from './layouts/MainLayout'
import Routing from './routing'
import { setStatusMenuAction } from './redux/actions/menuManagerAction'

const App = () => {
  const dispatch = useDispatch()

  const validateIfIsMobile = () => {
    return window.innerWidth <= MAX_WIDTH_MOBILE
  }

  dispatch(setIsMobileAction(validateIfIsMobile()))
  dispatch(setStatusMenuAction(!validateIfIsMobile()))

  return (
    <Fragment>
      <MainLayout>
        <Routing />
      </MainLayout>
    </Fragment>
  )
}

export default App
