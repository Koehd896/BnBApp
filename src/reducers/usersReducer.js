export default function usersReducer(state = {user: {}, loading: false}, action){
    switch (action.type) {
        case "LOADING_USER":
            return {
                ...state,
                loading: true
            };
        case "LOGIN_USER":
            return {
                ...state,
                user: {name: action.user.name, id: action.user.id},
                loading: false
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: {},
                loading: false
            }
        default:
            return state;
    }

}