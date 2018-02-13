import React from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

const SurveyConfirmation = ({ survey, onCancel, onConfirm }) => (
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
      onClick={onConfirm}
    />
  </div>
);

export default SurveyConfirmation;
