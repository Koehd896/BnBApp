import { Component } from 'react';
import { connect } from 'react-redux';
import RoomInput from '../components/RoomInput';
import Rooms from '../components/Rooms';

class RoomsContainer extends Component {

    render() {
        return(
            <div>
                <RoomInput addRoom={this.props.addRoom}/>
                <Rooms rooms={this.props.rooms} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {rooms: state.rooms}
}

const mapDispatchToProps = (dispatch) => {
    return {addRoom: (room) => dispatch({type: "ADD_ROOM", room})}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);