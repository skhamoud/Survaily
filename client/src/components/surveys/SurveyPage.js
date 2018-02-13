import React from 'react';
import { connect } from 'react-redux';

const SurveyPage = ({ match: { params }, survey }) => (
  <div>
    <header>{survey.title}</header>
    <p>Subject: {survey.subject}</p>
    <p>Date: {new Date(survey.dateSent).toLocaleDateString('fr-FR')}</p>
    <p>Body: {survey.body}</p>
    <p>Positive Answers: {survey.yes}</p>
    <p>Negative Answers: {survey.no}</p>
  </div>
);

export default connect(({ surveys }, { match }) => {
  const survey = surveys.find(s => s._id === match.params.id) || {};
  return {
    survey,
  };
})(SurveyPage);
