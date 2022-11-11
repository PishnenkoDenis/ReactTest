import { USER_LOGOUT, USER_LOGOUT_SUCCESSED } from '../../utils/constants';

export const logoutUser = () => ({
  type: USER_LOGOUT,
});

export const logoutUserSuccessed = () => ({
  type: USER_LOGOUT_SUCCESSED,
});
