import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Menu, Icon } from 'semantic-ui-react';

import { logOutUser } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: '',
    };
  }

  handleLinkClick(e, { name }) {
    this.setState({ activeLink: name });
  }
  componentWillUpdate(nextProps) {
    if (nextProps.auth === false) {
      this.props.history.push('/');
    }
  }

  renderAuthMenu = () => {
    const { auth } = this.props;
    if (auth) {
      return (
        <Menu.Item
          as="a"
          onClick={() => {
            this.props.logOutUser();
          }}
        >
          logout
        </Menu.Item>
      );
    } else if (auth === null) return;
    return (
      <Menu.Item as="a" href="/auth/google" name="signup">
        Sign up with google
      </Menu.Item>
    );
  };

  render() {
    const { activeLink } = this.state;
    const { auth } = this.props;

    return (
      <Menu stackable borderless size="large" inverted color="teal">
        <Container>
          <Menu.Item header>
            <Icon name="home" />
            <Link to={auth ? '/surveys' : '/'}>Emaily</Link>
          </Menu.Item>

          <Menu.Menu position="left">
            <Menu.Item
              as={Link}
              active={activeLink === 'surveys'}
              name="surveys"
              to="/surveys"
              //   onClick={this.handleLinkClick}
            >
              Surveys
            </Menu.Item>
            <Menu.Item
              as={Link}
              active={activeLink === 'newSurvey'}
              color="teal"
              name="newSurvey"
              to="/surveys/new"
              //   onClick={this.handleLinkClick}
            >
              <Icon name="add" />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">{this.renderAuthMenu()}</Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

function mapStateToProps({ auth }, ownProps) {
  return {
    auth,
    ...ownProps,
  };
}

// export with router to get access to router props as `history` etc...
export default connect(mapStateToProps, { logOutUser })(withRouter(Header));
