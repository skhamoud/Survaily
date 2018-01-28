import { FETCH_USER, LOGOUT_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await fetch('/auth/current_user', { credentials: 'same-origin' });
  try {
    dispatch({ type: FETCH_USER, user: await res.json() });
  } catch (err) {
    dispatch({ type: FETCH_USER });
  }
};

export const logOutUser = () => (dispatch) => {
  fetch('/auth/logout', { credentials: 'same-origin' }).then(() => dispatch({ type: LOGOUT_USER }));
};

export const handleStripeToken = token => async (dispatch) => {
  const res = await fetch('/api/stripe', {
    method: 'POST',
    body: JSON.stringify(token),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    credentials: 'same-origin',
  });
  if (res.ok) {
    dispatch({ type: FETCH_USER, user: await res.json() });
  }
};
