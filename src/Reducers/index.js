import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import UIState from './UIState';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  ui: UIState
});

export default rootReducer;
