import { Row, Col } from 'react-flexbox-grid'
import { useSelector } from 'react-redux'

import SideLeft from './SideLeft'

const Navbar = () => {
  const { validationsReducer } = useSelector(state => state)
  
  return (
    <Row className={ `${ validationsReducer ? 'p-2' : 'py-1 px-5'}` }>
      <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-space-between">
        <SideLeft />
      </Col>
      <Col xs={ 12 } md={ 6 } className="display-flex align-items-center justify-content-center">
        Links
      </Col>
    </Row>
  )
}

export default Navbar