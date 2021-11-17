import React from 'react';
import { useParams } from 'react-router-dom';

export default function RoomView(props) {
        const params = useParams();
        const room =  props.rooms.find(room => room.uuid === parseInt(params["roomId"], 10))
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{width: 30 + 'em'}}>
                            <img src={room.image} className="card-img-top" alt="room" />
                            <div className="card-body" >
                                <h5 className="card-title">{room.title}</h5>
                                <p className="card-text">Price: {room.price}</p>
                                <p className="card-text">Bedrooms: {room.bedrooms}</p>
                                <p className="card-text">Bathrooms: {room.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}





