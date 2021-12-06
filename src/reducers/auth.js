import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/type";

const token = localStorage.getItem("jwt_token");
const userId = localStorage.getItem("userId");

const initialState = (token && userId)
? { isLoggedIn: true, user: userId }
: { isLoggedIn: false, user: null };

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state
            };
        case LOGOUT:
            return {
                ...state
            };
        default:
            return state;
    }
}