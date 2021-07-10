import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </Router>
  )
}

export default Routing