import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import Branding from '../components/Branding'
import Web from '../components/Web'
import Photography from '../components/Photography'
import App from '../components/App'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/branding" component={ Branding } />
      <Route path="/web" component={ Web } />
      <Route path="/photography" component={ Photography } />
      <Route path="/app" component={ App } />
    </Switch>
  )
}

export default Routing