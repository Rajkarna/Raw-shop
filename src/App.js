import HomePage from './pages/homepage/homepage.component'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const HatsPage = () => (
  <div>
    hats page
  </div>
)

function App() {
  return (
  

     <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      </Router>
 
  
  )
}

export default App; 