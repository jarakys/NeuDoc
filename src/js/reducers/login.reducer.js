const INITIAL_STATE = {
  loggedInUser: null,
  loginStatus: null
}

export const Login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_WITH_EMAIL_SUCCESS":
            return {...state, loggedInUser: action.payload, loginStatus: action.payload};
        case "LOGIN_WITH_EMAIL_FAILURE":
            return {...state, }
        case "LOGIN_WITH_FACEBOOK":
            return state;
        case "LOGIN_WITH_GOOGLE":
            return state;
        default:
            return state;
    }
}
