import { Component } from 'react';
import { connect } from 'react-redux';
import RoomInput from '../components/RoomInput';
import Rooms from '../components/Rooms';
import { fetchRooms, postRoom } from '../actions/roomActions';
import { Route, Switch } from 'react-router-dom';
import RoomView from '../components/RoomView';
import { postBooking, fetchBookings } from '../actions/bookingActions';

class RoomsContainer extends Component {

    componentDidMount() {
        this.props.fetchRooms()
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    <Switch>
                        <Route exact path="/rooms/new">
                            <RoomInput 
                            addRoom={this.props.addRoom} 
                            testAction={this.props.testAction}
                            postRoom={this.props.postRoom}
                            rooms={this.props.rooms}
                            />
                        </Route>
                        <Route exact path="/rooms/:roomId" >
                            <RoomView 
                                rooms={this.props.rooms} 
                                user={this.props.user} 
                                postBooking={this.props.postBooking}
                            />
                        </Route>
                        <Route exact path="/rooms/:userId/bookings">
                            <Rooms 
                               rooms={this.props.bookings}
                            />
                        </Route>
                        <Route exact path ="/rooms"><Rooms rooms={this.props.rooms} /></Route>
                    </Switch>
                </div>
            )
        }

    }

    render() {
        return(
            <div>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.roomsReducer.rooms,
        user: state.usersReducer.user,
        bookings: state.bookingsReducer.bookings,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        postRoom: (room) => dispatch(postRoom(room)),
        postBooking: (booking) => dispatch(postBooking(booking)),
        fetchBookings: (user) => dispatch(fetchBookings(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);