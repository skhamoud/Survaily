import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleStripeToken } from '../actions';

const Payments = props => (
  <StripeCheckout
    name="Survaily"
    description="$5 for 5 Survaily credits"
    amount={500}
    token={token => props.handleStripeToken(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    <button className="ui inverted olive button">Add Credits</button>
  </StripeCheckout>
);

export default connect(null, { handleStripeToken })(Payments);
