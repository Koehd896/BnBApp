import RoomsContainer from './containers/RoomsContainer';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import UsersContainer from './containers/UsersContainer';
import Bookings from './components/Bookings';



class App extends React.Component {
  render() {
    return (
      <Router>
          <NavBar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/rooms" component={RoomsContainer} />
              <Route path="/signup" component={UsersContainer} />
              <Route path="/login" component={UsersContainer} />
              <Route exact path="/bookings" component={Bookings} /> 
          </Switch>
      </Router> 
    )
  }
}

export default App;
