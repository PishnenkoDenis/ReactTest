import {
  LIST_SUCCESSED, LIST_FAILED, LIST_REQUESTED, OPEN_POPUP, CLOSE_POPUP,
} from '../../utils/constants';

const initialState = {
  listing: [],
  error: null,
  isLoading: false,
  show: false,
};

const listingReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        listing: action.payload,
      };
    case LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case OPEN_POPUP:
      return {
        ...state,
        show: true,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default listingReducer;
