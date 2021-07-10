import { Row, Col } from 'react-flexbox-grid'

const Navbar = () => {
  return (
    <nav>
      <Row>
        <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-center">One</Col>
        <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-center">Two</Col>
      </Row>
    </nav>
  )
}

export default Navbar