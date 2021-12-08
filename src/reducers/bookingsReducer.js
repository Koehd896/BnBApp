export default function bookingsReducer(state = { bookings: [], loading: false}, action){
    switch (action.type) {
        case "LOADING_USER":
            return {
                ...state,
                loading: true
            };
        case "ADD_BOOKING":
            console.log("ADD_BOOKING hit")
            return {
                ...state,
                bookings: state.bookings.concat(action.booking),
                loading: false
            }
        default:
            return state;
    }

}