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
            return {
                ...state, 
                rooms: state.rooms.concat(action.room), 
                loading: false
            };
        default:
            return state
    } 
}