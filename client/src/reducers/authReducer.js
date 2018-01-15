import { FETCH_USER, LOGOUT_USER } from '../actions/types';

export default function authReducer(prevState = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.auth || false;

    case LOGOUT_USER:
      return false;

    default:
      return prevState;
  }
}
