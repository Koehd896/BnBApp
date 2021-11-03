import { Component } from 'react';
import { connect } from 'react-redux';
import RoomInput from '../components/roomInput';

class RoomsContainer extends Component {

    render() {
        return(
            <div>
                <RoomInput />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {addRoom: (room) => dispatch({type: "ADD_ROOM", room})}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);