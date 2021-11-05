import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Room extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.room.title}
                    <Link to={`/rooms/${this.props.room.id}`} />
                </li>
            </div>
        )
    }
}

export default Room;