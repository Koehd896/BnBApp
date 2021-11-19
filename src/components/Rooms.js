import React from 'react';
import Room from './Room';

export default function Rooms(props) {

        let roomsList = props.rooms.map(room => {
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