import {
  DETAILS_SUCCESSED, DETAILS_FAILED, DETAILS_REQUESTED, DETAILS_ESCAPED,
} from '../../utils/constants';

const initialState = {
  details: [],
  error: null,
  isLoading: false,
};

const detailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DETAILS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case DETAILS_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        details: action.payload,
      };
    case DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DETAILS_ESCAPED:
      return {
        ...state,
        isLoading: false,
        details: [],
      };
    default:
      return state;
  }
};

export default detailsReducer;
