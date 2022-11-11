import {
  CLOSE_ALERT,
  GET_CHECKED,
  LOGIN_FAILED,
  LOGIN_REQUESTED,
  LOGIN_SUCCESSED,
  CHECK_USER_FAILED,
  CHECK_USER_SUCCESSED,
  USER_LOGOUT_SUCCESSED,
} from '../../utils/constants';

const initialState = {
  token: null,
  error: null,
  isLoggedIn: Boolean(localStorage.getItem('token')),
  isFetching: false,
  show: false,
  check: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESSED:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        isFetching: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        check: false,
        show: true,
        error: action.payload,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        isFetching: false,
        show: false,
      };
    case GET_CHECKED:
      return {
        ...state,
        check: action.payload,
      };
    case CHECK_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case CHECK_USER_SUCCESSED:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_LOGOUT_SUCCESSED:
      return {
        ...state,
        isLoggedIn: false,
        check: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
