import React, {Component} from 'react';
import Room from './Room';
import RoomView from './RoomView';
import { Route } from 'react-router-dom';

class Rooms extends Component {

    

    render(){
        const roomsList = this.props.rooms.map(room => {
            return(
               <div>
                   <Route path="/rooms/:roomId" render={() => <RoomView room={room}/>} />
                   <Room room={room} key={room.id}/>
                </div>
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