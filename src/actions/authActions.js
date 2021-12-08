export const postAuth = (user) => {
    return (dispatch) => {
        dispatch({type: "LOADING_USER"})
        fetch('http://localhost:3001/login', {
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
            console.log(data)
            return dispatch({type: "LOGIN_USER", user: data.user})
        })
    }
}