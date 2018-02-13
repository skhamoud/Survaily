import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';
import { fetchUser, fetchSurveys } from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import SurveyPage from './surveys/SurveyPage';
import Login from './Login';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchSurveys();
  }

  /** renders passed component with customProps if the user is authenticated
   * @param {Component} Component the component to render
   * @param {object}   customProps your own props that will be passed to the  component
   */
  renderIfAuthenticated = (Component, customProps) => routeProps => {
    const { auth } = this.props;
    // null while fetching user info
    if (auth === null) return null;
    else if (auth === false) return <Redirect to={'/login'} />;
    return <Component {...customProps} {...routeProps} />;
  };

  render() {
    console.log('auth:', this.props.auth);
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="ui container">
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/surveys"
              render={this.renderIfAuthenticated(Dashboard, { surveys: this.props.surveys })}
            />
            <Route exact path="/surveys/new" render={this.renderIfAuthenticated(SurveyNew)} />
            <Route exact path="/survey/:id" render={this.renderIfAuthenticated(SurveyPage)} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth, surveys }) {
  return {
    auth,
    surveys,
  };
}

export default connect(mapStateToProps, { fetchUser, fetchSurveys })(App);

// eslint-disable no-unused-expressions
injectGlobal`
  body {
    
  }
  .em-btn__lifted {
    box-shadow: 0px 2px 6px 0 rgba(34, 36, 38, 0.5) !important ;
  }
`;
