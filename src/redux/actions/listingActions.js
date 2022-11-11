import {
  LIST_REQUESTED,
  LIST_SUCCESSED,
  LIST_FAILED,
} from '../../utils/constants';

export const getList = () => ({
  type: LIST_REQUESTED,
});

export const getListSuccessed = () => ({
  type: LIST_SUCCESSED,
});

export const getListFailed = () => ({
  type: LIST_FAILED,
});
