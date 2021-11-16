import React from 'react';
import { useParams } from 'react-router-dom';

export default function RoomView(props) {
        const params = useParams();
        const room =  props.rooms.find(room => room.uuid === parseInt(params["roomId"], 10))
        return <div>{room.title}</div>
}





