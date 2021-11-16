import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import RoomView from './RoomView';

class Room extends Component {

    render() {
        return (
            <div className="room-card" >
                <div className="room-title">Room Name: {this.props.room.title}</div>                       
                <div className="room-bedrooms">Bedroom(s): {this.props.room.bedrooms}</div>
                <div className="room=bathrooms">Bathroom(s): {this.props.room.bathrooms}</div>
                <div className="room=price">Price: ${this.props.room.price}</div>                   
                <div className="room=image"><img src={this.props.room.image} alt="room"></img></div>
                <Link to={`/rooms/${this.props.room.uuid}`}  >See More</Link>
            </div>
        )
    }
}

export default Room;