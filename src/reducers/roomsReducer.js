export default function roomsReducer(state = [], action) {
    switch ( action.type ) {
        case "ADD_ROOM":
            console.log("roomsReducer, state.concat(action.room):", state.concat(action.room))
            return state.concat({title: action.room})
        default:
            return state
    } 
}