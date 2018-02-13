import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyConfirmation from './SurveyConfirmation';
import { connect } from 'react-redux';
import { sendSurvey } from '../../actions';

class SurveyNew extends Component {
  state = {
    confirmScreen: false,
    form: {},
    // form: JSON.parse(localStorage.getItem('surveyData')),
  };

  handleFormSubmit = values => {
    this.setState({ confirmScreen: true, form: this.props.surveyForm });
    console.log(this.state.form);
  };

  handleCancelConfirmation = () => {
    this.setState({ confirmScreen: false });
  };

  handleConfirmSurvey = () => {
    const { form } = this.state;
    this.props.sendSurvey(form);
    this.props.history.push('/surveys');
  };

  render() {
    return (
      <div style={{ paddingBottom: 60 }}>
        {this.state.confirmScreen ? (
          <SurveyConfirmation
            onCancel={this.handleCancelConfirmation}
            onConfirm={this.handleConfirmSurvey}
            survey={this.state.form}
          />
        ) : (
          <SurveyForm onSubmit={this.handleFormSubmit} defaultForm={this.state.form} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ form }) {
  const surveyForm = form.surveyForm;
  return {
    surveyForm: (surveyForm && surveyForm.values) || {},
  };
}

export default connect(mapStateToProps, { sendSurvey })(SurveyNew);
