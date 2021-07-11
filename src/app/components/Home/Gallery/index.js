import { Row, Col } from 'react-flexbox-grid'

import BlockIcon from '../../../assets/images/icons/Block@2x.png'
import ColumnIcon from '../../../assets/images/icons/Column@2x.png'
import SideRight from '../../Navbar/SideRight'

import './index.css'

const Gallery = () => {
  return (
    <div>
      <Row>
        <Col xs={ 12 } className="display-flex align-items-center justify-content-center">
          <img src={ BlockIcon }  alt="block" className="cursor-pointer gallery__icon" />
          <img src={ ColumnIcon }  alt="column" className="cursor-pointer gallery__icon" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={ 12 } className="display-flex align-items-center justify-content-center">
          <SideRight showSearchIcon={ false } />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={ 1.5 } className="display-flex align-items-center justify-content-center"></Col>
        <Col xs={ 3 } className="display-flex align-items-center justify-content-center">three one</Col>
        <Col xs={ 3 } className="display-flex align-items-center justify-content-center">three two</Col>
        <Col xs={ 3 } className="display-flex align-items-center justify-content-center">three three</Col>
        <Col xs={ 1.5 } className="display-flex align-items-center justify-content-center"></Col>
      </Row>

      <Row>
        <Col xs={ 12 } className="display-flex align-items-center justify-content-center">
          <button className="button primary-bg-color light-color cursor-pointer">Show Me More</button>
        </Col>
      </Row>
    </div>
  )
}

export default Gallery