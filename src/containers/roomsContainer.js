import { Component } from 'react';
import { connect } from 'react-redux';
import RoomInput from '../components/RoomInput';
import Rooms from '../components/Rooms';
import { fetchRooms, postRoom } from '../actions/roomActions';

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
                    <RoomInput 
                    addRoom={this.props.addRoom} 
                    testAction={this.props.testAction}
                    postRoom={this.props.postRoom}
                    rooms={this.props.rooms}
                    />
                    <Rooms rooms={this.props.rooms} />  
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
        rooms: state.rooms,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRoom: (room) => dispatch({type: "ADD_ROOM", room}),
        fetchRooms: () => dispatch(fetchRooms()),
        postRoom: () => dispatch(postRoom),
        testAction: () => dispatch({
            type: "ADD_ROOMS", 
            rooms: [{title: "test room 1", id: 123}, {title: "test room 2", id: 234}]}, )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);