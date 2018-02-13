import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Form, Header, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import Link from 'react-router-dom/Link';

function validate(values) {
  const errors = {};

  if (!values.title) errors.title = 'You must specify a title for your survey!';

  if (!values.subject) errors.subject = 'Subject field is required for the survey email!';

  if (!values.body) errors.body = 'You must provide an Email body text!';

  if (!values.recipients) errors.recipients = 'Recipients are required!';
  else {
    const recipientsArr =
      values.recipients && values.recipients.split(',').map(email => email.trim());
    const incorrectEmail = recipientsArr && recipientsArr.find(email => !email || !isEmail(email));
    if (incorrectEmail) {
      errors.recipients = `Incorrect Email found in the list, ${incorrectEmail} is not a valid email. Please provide a valid comma seperated email list`;
    }
  }

  return errors;
}

class SurveyForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Header textAlign="center"> Survey Form</Header>
        <Form onSubmit={handleSubmit}>
          <Field name="title" label="Survey Title" component={SurveyField} />
          <Field name="subject" label="Email Subject" component={SurveyField} />
          <Field name="body" component={SurveyField} htmlInput="textarea" label="Email Body" />
          <Field name="recipients" label="Email Recipients" component={SurveyField} />

          <Link to="/surveys">
            <Button floated="left" type="button" content="Cancel" />
          </Link>
          <Button
            type="submit"
            floated="right"
            color="teal"
            icon="arrow right"
            content="Next"
            labelPosition="right"
          />
        </Form>
      </div>
    );
  }
}

const SurveyField = ({
  input,
  type,
  label,
  meta: { touched, error },
  htmlInput: Input = 'input',
}) => (
  <Form.Field>
    <label htmlFor={input.name}>{label}</label>
    <Input {...input} type={type} placeholder={label} />
    {touched && error && <Message content={error} negative />}
  </Form.Field>
);

const decoratedForm = reduxForm({
  form: 'surveyForm',
  validate,
})(SurveyForm);

function mapStateToProps({ surveyForm }, ownProps) {
  return {
    initialValues: (surveyForm && surveyForm.values) || ownProps.defaultForm,
  };
}

export default connect(mapStateToProps)(decoratedForm);
