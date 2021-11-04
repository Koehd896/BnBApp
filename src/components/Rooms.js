import React, {Component} from 'react';
import Room from './Room';

class Rooms extends Component {

    render(){
        const roomsList = this.props.rooms.map(room => {
            return(
                <Room room={room} key={room.id}/>
            )
        })
        
        return(
            <ul>{roomsList}</ul>
        );
    }
}

export default Rooms;