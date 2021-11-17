import React, {Component} from 'react';
import Room from './Room';
import RoomView from './RoomView';
import { Route, Link } from 'react-router-dom';

class Rooms extends Component {

    

    render(){
        const roomsList = this.props.rooms.map(room => {
            return <li key={room.uuid}><Room room={room} /></li>
        })
        
        return(
            <ul className="list-unstyled">
                 <div className="container">
                    <div className="row">
                        {roomsList}
                    </div>
                </div>
            </ul>
        );
    }
}

export default Rooms;