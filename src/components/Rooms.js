import React, {Component} from 'react';
import Room from './Room';
import RoomView from './RoomView';
import { Route, Link } from 'react-router-dom';

class Rooms extends Component {

    

    render(){
        const roomsList = this.props.rooms.map(room => {
            return(
                <li key={room.uuid}>
                   {/* <Room room={room} /> */}
                   <Link to={`/rooms/${room.uuid}`} >
                       {room.title}
                   </Link>
                </li>
            )
        })
        
        return(
            <div>
               <ul>{roomsList}</ul>
            </div>
        );
    }
}

export default Rooms;