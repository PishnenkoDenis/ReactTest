import {
  CHECK_USER_REQUESTED,
  CHECK_USER_SUCCESSED,
  CHECK_USER_FAILED,
} from '../../utils/constants';

export const checkUser = () => ({
  type: CHECK_USER_REQUESTED,
});

export const checkUserSuccessed = () => ({
  type: CHECK_USER_SUCCESSED,
});

export const checkUserFailed = () => ({
  type: CHECK_USER_FAILED,
});
