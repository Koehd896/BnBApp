import RoomsContainer from './containers/RoomsContainer';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import { NavBar } from './components/NavBar';
import { Signup } from '.components/Signup';



class App extends React.Component {
  render() {
    return (
      <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/rooms" component={RoomsContainer} />
              <Route path="/signup" component={Signup} />
          </Switch>
      </Router> 
    )
  }
}

export default App;
