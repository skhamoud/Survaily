import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
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
      <Menu.Item as="a" href="/auth/google" name="signup" color="red">
        Sign up with google
      </Menu.Item>
    );
  };

  render() {
    const { activeLink } = this.state;

    return (
      <Menu stackable borderless size="large">
        <Container fluid>
          <Menu.Item as={Link} color="red" to="/" header>
            <Icon name="home" />
            Emaily
          </Menu.Item>

          <Menu.Menu position="left">
            <Menu.Item
              as={Link}
              active={activeLink === 'surveys'}
              name="surveys"
              color="red"
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

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, { logOutUser })(Header);
