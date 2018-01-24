import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import UserReducer from './UserReducer';
import UIState from './UIState';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: UserReducer,
  ui: UIState
});

export default rootReducer;
