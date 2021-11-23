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
        // will be calling dispatch:
        .then(jwt => console.log(jwt))
    }
}