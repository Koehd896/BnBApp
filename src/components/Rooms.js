import React, {Component} from 'react';
import Room from './Room';
import RoomView from './RoomView';
import { Route, Link, useRouteMatch } from 'react-router-dom';

export default function Rooms(props) {

        const roomsList = props.rooms.map(room => {
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