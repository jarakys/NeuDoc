const INITIAL_STATE = {}

export const Signup = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGNUP_WITH_EMAIL":
            return state;
        default:
            return state;
    }
}