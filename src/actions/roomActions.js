export const fetchRooms = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('https://localhost3000/rooms')
        .then(response => {
            response.json()})
        .then(responseJSON => {
            dispatch({type: "ADD_ROOMS", rooms: responseJSON})
        })
    }

}