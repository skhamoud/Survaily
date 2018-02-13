import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Button } from 'semantic-ui-react';

const Login = ({ className }) => (
  <Segment textAlign="center" className={className} padded compact>
    <Header as="h2" content="Login" />
    <Button
      as="a"
      href="/auth/google"
      content="Login with Google"
      icon="google plus official"
      labelPosition="right"
      color="red"
      size="large"
      inverted
    />
  </Segment>
);

export default styled(Login)`
  margin: 15px auto !important;
`;
