export default function roomsReducer(state = [], action) {
    switch ( action.type ) {
        case "ADD_ROOM":
            return state.concate(action.room)
        default:
            return state
    } 
}