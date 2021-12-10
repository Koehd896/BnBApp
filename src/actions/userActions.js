export const postUser = (user) => {
    return (dispatch) => {
        console.log("postUser user argument:", user)
        dispatch({type: "LOADING_USER"})
        fetch('http://localhost:3001/api/v1/users', {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: user.name,
                    password: user.password
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("response:", data)
            localStorage.setItem("jwt", data.jwt)  
            return dispatch({type: "LOGIN_USER", user: data.user})
        })
    }
}