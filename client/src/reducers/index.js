import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';

export default combineReducers({
  auth: authReducer,
  surveys: surveyReducer,
  form: formReducer,
});
