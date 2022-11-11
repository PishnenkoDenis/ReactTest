import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listingReducer from './listingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  list: listingReducer,
});

export default rootReducer;
