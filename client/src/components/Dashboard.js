import React from 'react';
import { Container, Button, Header, Segment, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import styled from 'styled-components';

const SurveyList = ({ list = [] }) =>
  (list.length < 1 ? (
    <Segment secondary content="Click The Button below to create a survey." padded="very" />
  ) : (
    <Grid columns={2} celled padded>
      {list.map(survey => (
        <Grid.Column key={survey._id}>
          <Segment>
            <Link to={`/survey/${survey._id}`}>
              <Header content={survey.title} />
            </Link>
            <p>{survey.subject}</p>
          </Segment>
        </Grid.Column>
      ))}
    </Grid>
  ));

const Dashboard = ({ className, surveys }) => (
  <Container text textAlign="center" className={className}>
    <h3>Surveys</h3>
    <SurveyList list={surveys} />

    <Link to="/surveys/new">
      <Button
        className="em-btn__lifted add_survey"
        color="teal"
        circular
        size="large"
        icon="add"
        floated="right"
      />
    </Link>
  </Container>
);

const StyledDashboard = styled(Dashboard)`
  .add_survey {
    position: absolute;
    bottom: 50px;
    right: 15%;
  }
`;

export default StyledDashboard;
