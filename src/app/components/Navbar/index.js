import { Row, Col } from 'react-flexbox-grid'

import SideLeft from './SideLeft'
import SideRight from './SideRight'

import './index.css'

const Navbar = () => {
  return (
    <Row className="navbar">
      <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-space-between">
        <SideLeft />
      </Col>
      <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-center">
        <SideRight showSearchIcon={ true } />
      </Col>
    </Row>
  )
}

export default Navbar