import React from 'react';
import Room from './Room';
import { connect } from 'react-redux';

const Bookings = props => {

        const rooms = props.bookings.map(booking => props.rooms.find(room => room.uuid === booking.room_id))

        console.log("props.rooms:", props.rooms)
        console.log("props.bookings:", props.bookings)

        let roomsList = rooms.map(room => {
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

const mapStateToProps = state => {
    return {
        bookings: state.bookingsReducer.bookings,
        rooms: state.roomsReducer.rooms
    }
}


export default connect(mapStateToProps)(Bookings);  