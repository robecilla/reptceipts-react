import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import UserReducer from './UserReducer';
import UIState from './UIState';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: UserReducer,
  ui: UIState
});

const rootReducer = (state, action) => {
  if (action.type === 'UNAUTH_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
