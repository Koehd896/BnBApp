import React, {Component} from 'react';
import Room from './Room';
import RoomView from './RoomView';
import { Route, Link } from 'react-router-dom';

class Rooms extends Component {

    

    render(){
        const roomsList = this.props.rooms.map(room => {
            return <Room room={room} />
        })
        
        return(
            <div>
               {roomsList}
            </div>
        );
    }
}

export default Rooms;