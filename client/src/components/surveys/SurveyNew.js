import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyConfirmation from './SurveyConfirmation';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = {
    confirmScreen: false,
  };

  handleFormSubmit = values => {
    this.setState({ confirmScreen: true });
  };

  handleCancelConfirmation = () => {
    this.setState({ confirmScreen: false });
  };

  render() {
    return (
      <div style={{ paddingBottom: 60 }}>
        {this.state.confirmScreen ? (
          <SurveyConfirmation onCancel={this.handleCancelConfirmation} />
        ) : (
          <SurveyForm onSubmit={this.handleFormSubmit} />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
