import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyConfirmation from './SurveyConfirmation';
import { connect } from 'react-redux';
import { sendSurvey } from '../../actions';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = {
    confirmScreen: false,
    // form: JSON.parse(localStorage.getItem('surveyData')),
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
