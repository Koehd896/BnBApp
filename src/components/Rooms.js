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
            <div className="container">
               <div className="row">
                {roomsList}
               </div>
            </div>
        );
    }
}

export default Rooms;