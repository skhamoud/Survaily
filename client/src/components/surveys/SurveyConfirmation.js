import React from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { sendSurvey } from '../../actions';

const SurveyConfirmation = ({ survey, onCancel, sendSurvey }) => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <Header textAlign="center">Confirm Survey Information</Header>
    <Segment basic size="small">
      <Header content="Title" size="small" />
      {survey.title}
      <Header content="Subject" size="small" />
      {survey.subject}
      <Header content="Body" size="small" />
      {survey.body}
      <Header content="Recipients" size="small" />
      {survey.recipients}
    </Segment>

    <Button
      onClick={onCancel}
      type="button"
      floated="left"
      content="Back"
      labelPosition="left"
      icon="arrow left"
    />
    <Button
      type="submit"
      floated="right"
      color="teal"
      icon="checkmark"
      content="Next"
      labelPosition="right"
      onClick={() => sendSurvey(survey)}
    />
  </div>
);

export default connect(
  ({ form }) => ({
    survey: form.surveyForm.values,
  }),
  { sendSurvey },
)(SurveyConfirmation);
