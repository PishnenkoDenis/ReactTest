import {
  LIST_REQUESTED,
  LIST_SUCCESSED,
  LIST_FAILED,
  OPEN_POPUP,
  CLOSE_POPUP,
} from '../../utils/constants';

export const getList = () => ({
  type: LIST_REQUESTED,
});

export const getListSuccessed = (payload) => ({
  type: LIST_SUCCESSED,
  payload,
});

export const getListFailed = (payload) => ({
  type: LIST_FAILED,
  payload,
});

export const openPopUp = () => ({
  type: OPEN_POPUP,
});

export const closePopUp = () => ({
  type: CLOSE_POPUP,
});
