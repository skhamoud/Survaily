import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleStripeToken } from '../actions';

const Payments = props => (
  <StripeCheckout
    name="Emaily"
    description="$5 for 5 Emaily credits"
    amount={500}
    token={token => props.handleStripeToken(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    <button className="ui inverted olive button">Add Credits</button>
  </StripeCheckout>
);

export default connect(null, { handleStripeToken })(Payments);
