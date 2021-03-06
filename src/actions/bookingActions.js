export const postBooking = (booking) => {
    const token = localStorage.getItem("jwt")
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('http://localhost:3001/api/v1/bookings',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
        .then(booking => {
            console.log("response booking:", booking)
            return dispatch({type: "ADD_BOOKING", booking: booking})
        })
    }
}

// export const fetchBookings = (user) => {
//     const token = localStorage.getItem("jwt")
//     return (dispatch) => {
//         dispatch({type: "LOADING_ROOMS"})
//         fetch(`http://localhost:3001/${user.id}/bookings`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 Authorization: `Bearer ${token}`
//             } 
//         })
//         .then(response => response.json())
//         .then(bookings => dispatch({type: "ADD_BOOKINGS", bookings: bookings}))
//     }
// }