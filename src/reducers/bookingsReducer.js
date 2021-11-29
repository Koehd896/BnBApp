export default function bookingsReducer(state = { bookings: [], loading: false}, action){
    switch (action.type) {
        case "LOADING_USER":
            return {
                ...state,
                loading: true
            };
        case "ADD_BOOKINGS":
            return {
                ...state,
                bookings: state.bookings.concat(action.bookings),
                loading: false
            }
        default:
            return state;
    }

}