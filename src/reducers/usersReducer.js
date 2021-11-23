export default function usersReducer(state = {user: {}, loading: false}, action){
    switch (action.type) {
        case "LOADING_USER":
            return {
                ...state,
                loading: true
            };
        case "SIGN_UP":
            return {
                ...state,
                user: action.user,
                loading: false
            }
        default:
            return state;
    }

}