import { combineReducers } from 'redux';
import authReducer from './authReducer';
import detailsReducer from './detailsReducer';
import listingReducer from './listingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  list: listingReducer,
  details: detailsReducer,
});

export default rootReducer;
