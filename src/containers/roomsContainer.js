import { Component } from 'react';
import { connect } from 'react-redux';
import RoomInput from '../components/RoomInput';
import Rooms from '../components/Rooms';
import { fetchRooms, postRoom } from '../actions/roomActions';
import { Route, Switch, Link } from 'react-router-dom';
import RoomView from '../components/RoomView';

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
                        <Route exact path="/rooms/:roomId" ><RoomView rooms={this.props.rooms}/></Route>
                        <Route path ="/rooms"><Rooms rooms={this.props.rooms} /></Route>
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
        rooms: state.rooms,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRoom: (room) => dispatch({type: "ADD_ROOM", room}),
        fetchRooms: () => dispatch(fetchRooms()),
        postRoom: (room) => dispatch(postRoom(room)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);