import uuid from 'react-uuid';

export default function roomsReducer(state = { rooms: [], loading: false} , action) {
    switch ( action.type ) {
        case "ADD_ROOM":
            return {...state, rooms: state.rooms.concat({title: action.room, id: uuid()})}
        default:
            return state
    } 
}