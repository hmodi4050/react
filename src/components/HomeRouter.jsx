import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Users from './Users'

export default function HomeRouter() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <SignUp />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Users'>
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
