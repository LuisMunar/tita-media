import { Fragment } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </Fragment>
  )
}

export default MainLayout