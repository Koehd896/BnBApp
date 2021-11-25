export const postUser = (user) => {
    return (dispatch) => {
        dispatch({type: "LOADING_USER"})
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            console.log("response data.user:", data.user)
            localStorage.setItem("jwt", data.jwt)  
            return dispatch({type: "LOGIN_USER", user: data.user})
        })
    }
}