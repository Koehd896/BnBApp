import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import RoomView from './RoomView';

class Room extends Component {

    render() {
        return (
            <div>
                <li>
                    <div className="room-card">
                        <div className="room-title">{this.props.room.title}</div>
                        <div className="room-bedrooms">{this.props.room.bedrooms}</div>
                        <div className="room=bathrooms">{this.props.room.bathrooms}</div>
                        <div className="room=price">{this.props.room.price}</div>
                        <div className="room=image">{this.props.room.image}</div>
                        <Link to={`/rooms/${this.props.room.id}`}  >See More</Link>
                     </div>
                </li>
            </div>
        )
    }
}

export default Room;