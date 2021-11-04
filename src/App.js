import './App.css';
import RoomsContainer from './containers/RoomsContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
   <Router>
    <div className="App">
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path="/movies" render={routerProps => <RoomsContainer {...routerProps}/>}/>
    </div>
  </Router>
  );
}

export default App;
