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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);