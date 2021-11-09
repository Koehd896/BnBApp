import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            // add navbar to be displayed on all pages
            <div>
                <Link to="/rooms" >See Rooms</Link>
            </div>
        )
    }
}

export default Home;