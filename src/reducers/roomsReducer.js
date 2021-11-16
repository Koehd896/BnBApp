import uuid from 'react-uuid';

export default function roomsReducer(state = { rooms: [], loading: false} , action) {
    switch ( action.type ) {
        case "LOADING_ROOMS":
            return {
                ...state,
                loading: true
            };
        case "ADD_ROOMS": 
            return {
                ...state,
                rooms: state.rooms.concat(action.rooms),
                loading: false
            }
        case "ADD_ROOM":
            const newRoom = {...action.room, uuid: uuid()}
            return {
                ...state, 
                rooms: state.rooms.concat(newRoom), 
                loading: false
            };
        default:
            return state
    } 
}