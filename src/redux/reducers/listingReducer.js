import { LIST_SUCCESSED, LIST_FAILED } from '../../utils/constants';

const initialState = {
  listing: [],
};

const listingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_SUCCESSED:
      return state;
    case LIST_FAILED:
      return state;
    default:
      return state;
  }
};

export default listingReducer;
