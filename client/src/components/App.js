import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import { fetchUser } from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;
const Landing = () => <h2>Landing</h2>;
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={NewSurvey} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, { fetchUser })(App);
