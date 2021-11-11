import uuid from 'react-uuid';

export default function roomsReducer(state = { rooms: [], loading: false} , action) {
    switch ( action.type ) {
        case "LOADING_ROOMS":
            return {
                ...state,
                rooms:  [...state.rooms],
                loading: true
            };
        case "ADD_ROOMS": 
            console.log('ADD_ROOMS action:', action)
            return {
                ...state,
                rooms: [state.rooms.concat(action.rooms)],
                loading: false
            }
        case "ADD_ROOM":
            return {
                ...state, 
                rooms: [state.rooms.concat({title: action.room, id: uuid()})], 
                loading: false
            };
        default:
            return state
    } 
}