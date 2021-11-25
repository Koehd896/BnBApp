export const postBooking = (booking) => {
    const token = localStorage.getItem("jwt")
    return (dispatch) => {
        dispatch({type: "LOADING_ROOMS"})
        fetch('http://localhost:3001/bookings',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
        .then(booking => console.log(booking))
    }
}