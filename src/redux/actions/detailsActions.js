import {
  DETAILS_REQUESTED, DETAILS_SUCCESSED, DETAILS_FAILED, DETAILS_ESCAPED,
} from '../../utils/constants';

export const getDetailsData = (payload) => ({
  type: DETAILS_REQUESTED,
  payload,
});

export const getDetailsSuccessed = (payload) => ({
  type: DETAILS_SUCCESSED,
  payload,
});

export const getDetailsFailed = (payload) => ({
  type: DETAILS_FAILED,
  payload,
});

export const getDetailsEscaped = () => ({
  type: DETAILS_ESCAPED,
});
