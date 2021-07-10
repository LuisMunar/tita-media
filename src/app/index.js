import { Fragment } from 'react'


import MainLayout from './layouts/MainLayout'
import Routing from './routing'

const App = () => {
  return (
    <Fragment>
      <MainLayout>
        <Routing />
      </MainLayout>
    </Fragment>
  )
}

export default App
