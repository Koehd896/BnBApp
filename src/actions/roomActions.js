export const fetchRooms = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('http://localhost:3001/rooms')
        .then(response => {
            response.json()})
        .then(responseJSON => {
            console.log("fetchRooms responseJSON:", responseJSON)
            dispatch({type: "ADD_ROOMS", rooms: responseJSON})
        })
        .catch(error => console.log(error))
    }

}

export const postRoom = (data) => {
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('http://localhost:3001/rooms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
          }
        )
        .then(response => response.json())
        .then(data => console.log(data))
    }

}