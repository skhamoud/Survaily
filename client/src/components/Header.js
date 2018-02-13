import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Menu, Icon } from 'semantic-ui-react';
import Payments from './Payments';
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
      return [
        <Menu.Item key="1">
          <Payments />
        </Menu.Item>,
        <Menu.Item key="3" as="span">
          Credits: {auth.credits}
        </Menu.Item>,
        <Menu.Item
          key="2"
          as="a"
          onClick={() => {
            this.props.logOutUser();
          }}
        >
          logout
        </Menu.Item>,
      ];
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
      <Menu stackable borderless inverted color="teal">
        <Container>
          <Menu.Item header>
            <Icon name="home" />
            <Link to={auth ? '/surveys' : '/'}>Emaily</Link>
          </Menu.Item>

          <Menu.Item as={Link} active={activeLink === 'surveys'} name="surveys" to="/surveys">
            Surveys
          </Menu.Item>

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

// export with router to get access to router props such as `history` etc...
export default connect(mapStateToProps, { logOutUser })(withRouter(Header));
