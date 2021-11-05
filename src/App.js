import RoomsContainer from './containers/RoomsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
