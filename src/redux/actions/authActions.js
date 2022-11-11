import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  CLOSE_ALERT,
  GET_CHECKED,
} from '../../utils/constants';

export const login = (payload) => ({
  type: LOGIN_REQUESTED,
  payload,
});

export const loginSuccessed = (payload) => ({
  type: LOGIN_SUCCESSED,
  payload,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});

export const setChecked = (payload) => ({
  type: GET_CHECKED,
  payload,
});
