import React from 'react';
import { useParams } from 'react-router-dom';

export default function RoomView(props) {
        // console.log("RoomView props:", props)
        const params = useParams();
        const room =  props.rooms.find(room => room.uuid === parseInt(params["roomId"], 10))
        console.log("RoomView room:", room)
        const userId = props.user.id
        let loggedIn
        if (props.user.name ) {
            loggedIn = true
        } else {
            loggedIn = false
        }
        const postBooking = () => {
            return props.postBooking({room_id: room.id, user_id: userId})
        }
        console.log("loggedIn:", loggedIn)
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
                                { loggedIn ? 
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={postBooking}>
                                            Book Room
                                    </button> 
                                    :
                                    <div></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}





