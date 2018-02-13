import { FETCH_USER_SURVEYS, SEND_SURVEY } from '../actions/types';

export default (surveys = [], action) => {
  switch (action.type) {
    case FETCH_USER_SURVEYS:
      return action.surveys;
    case SEND_SURVEY:
      return [...surveys, action.payload.survey];
    default:
      return surveys;
  }
};
