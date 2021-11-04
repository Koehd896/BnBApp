import uuid from 'react-uuid';

export default function roomsReducer(state = [], action) {
    switch ( action.type ) {
        case "ADD_ROOM":
            return state.concat({title: action.room, id: uuid()})
        default:
            return state
    } 
}