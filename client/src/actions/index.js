import { FETCH_USER, LOGOUT_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await fetch('/auth/current_user', { credentials: 'same-origin' });
  try {
    dispatch({ type: FETCH_USER, auth: await res.json() });
  } catch (err) {
    dispatch({ type: FETCH_USER });
  }
};

export const logOutUser = () => (dispatch) => {
  fetch('/auth/logout', { credentials: 'same-origin' }).then(() => dispatch({ type: LOGOUT_USER }));
};
