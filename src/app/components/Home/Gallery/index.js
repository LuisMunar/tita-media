import { Row, Col } from 'react-flexbox-grid'

import BlockIcon from '../../../assets/images/icons/Block@2x.png'
import ColumnIcon from '../../../assets/images/icons/Column@2x.png'

import OneImage from '../../../assets/images/gallery/one.jpg'
import TwoImage from '../../../assets/images/gallery/two.jpg'
import ThreeImage from '../../../assets/images/gallery/three.jpg'

import FourImage from '../../../assets/images/gallery/four.jpg'
import FiveImage from '../../../assets/images/gallery/five.jpg'
import SixImage from '../../../assets/images/gallery/six.jpg'

import SevenImage from '../../../assets/images/gallery/seven.jpg'
import EightImage from '../../../assets/images/gallery/eight.jpg'
import NineImage from '../../../assets/images/gallery/nine.jpg'

import NavbarLink from '../../Navbar/SideRight/NavbarLink'

import { PAGES_PATH } from '../../../constants/pageConstants'

import './index.css'

const Gallery = () => {
  const renderPagesLinks = () => PAGES_PATH.map((dataPath, i) => <NavbarLink key={ `${ i }-${ dataPath.name }` } dataPath={ dataPath } handlerMenu={ false } />)

  return (
    <div>
      <Row>
        <Col xs={ 12 } className="display-flex align-items-center justify-content-center">
          <img src={ BlockIcon }  alt="block" className="cursor-pointer gallery__icon" />
          <img src={ ColumnIcon }  alt="column" className="cursor-pointer gallery__icon" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={ 12 } className="display-flex align-items-center justify-content-center flex-wrap">
          { renderPagesLinks() }
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={ 12 } md={ 1.5 }></Col>
        <Col xs={ 12 } md={ 3 } className="display-flex align-items-center justify-content-center flex-direction-column">
          <img src={ OneImage } alt="one" className="gallery__image gallery__image--type-one" />
          <img src={ TwoImage } alt="two" className="gallery__image gallery__image--type-two" />
          <img src={ ThreeImage } alt="three" className="gallery__image gallery__image--type-three" />
        </Col>
        <Col xs={ 12 } md={ 3 } className="display-flex align-items-center justify-content-center flex-direction-column">
          <img src={ FourImage } alt="four" className="gallery__image gallery__image--type-two" />
          <img src={ FiveImage } alt="five" className="gallery__image gallery__image--type-three" />
          <img src={ SixImage } alt="six" className="gallery__image gallery__image--type-one" />
        </Col>
        <Col xs={ 12 } md={ 3 } className="display-flex align-items-center justify-content-center flex-direction-column">
          <img src={ SevenImage } alt="seven" className="gallery__image gallery__image--type-three" />
          <img src={ EightImage } alt="eight" className="gallery__image gallery__image--type-two" />
          <img src={ NineImage } alt="nine" className="gallery__image gallery__image--type-one" />
        </Col>
        <Col xs={ 12 } md={ 1.5 }></Col>
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