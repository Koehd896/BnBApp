import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div>Home</div>
                <Link to="/rooms" >See Rooms</Link>
            </div>
        )
    }
}

export default Home;