import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </switch>
  </>
)

export default App
