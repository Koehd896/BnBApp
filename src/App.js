import RoomsContainer from './containers/RoomsContainer';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"
import RoomView from "./components/RoomView"
import RoomInput from './components/RoomInput';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <Router>
          <div>  
              <Route exact path="/" component={Home} />
              <Route path="/rooms" component={RoomsContainer} />


          </div>
      </Router> 
    )
  }
}

export default App;
