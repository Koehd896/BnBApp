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

export const postRoom = (data) => {
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('https://localhost3000/rooms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
          }
        )
    }

}