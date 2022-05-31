import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL
} from "../actions/auth";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_START:
      return (state = { ...state, isFetching: true });
      break;
    case AUTH_SUCCESS:
      return (state = {
        ...state,
        token: action.token,
        expirationDate: action.expirationDate,
        isAuthenticated: true,
        error: null
      });
      break;
    case AUTH_LOGOUT:
      return (state = {
        ...state,
        token: null,
        expirationDate: null,
        isAuthenticated: false,
        error: null
      });
      break;
    case AUTH_FAIL:
      return (state = {
        ...state,
        token: null,
        expirationDate: null,
        isAuthenticated: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default authReducer;
