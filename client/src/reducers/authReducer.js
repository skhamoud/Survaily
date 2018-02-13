import { FETCH_USER, LOGOUT_USER, SEND_SURVEY } from '../actions/types';

export default function authReducer(prevState = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user || false;

    case LOGOUT_USER:
      return false;

    case SEND_SURVEY:
      return action.payload.user;

    default:
      return prevState;
  }
}
