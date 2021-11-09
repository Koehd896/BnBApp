import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import RoomView from './RoomView';

class Room extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.room.title}
                    <Link to={`/rooms/${this.props.room.id}`}  >See More</Link>
                </li>
            </div>
        )
    }
}

export default Room;