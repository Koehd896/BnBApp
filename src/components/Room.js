import React, {Component} from 'react';

class Room extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.room.title}
                </li>
            </div>
        )
    }
}

export default Room;