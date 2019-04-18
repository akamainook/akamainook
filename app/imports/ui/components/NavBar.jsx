import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

class NavBar extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <h1>Akamai Nook</h1></Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active"
                       exact to="/home"
                       position="right">HOME</Menu.Item>

            {this.props.currentUser ? (
                [
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/addnook">ADD A SPOT</Menu.Item>,
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/profile">PROFILE</Menu.Item>,
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/signout">SIGN OUT</Menu.Item>
                ]
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
            ) : ''}

            {this.props.currentUser === '' ? (
                [
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/signin">SIGN IN</Menu.Item>,
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/signup">SIGN UP</Menu.Item>]
            ) : ''}
          </Container>
        </Menu>
    );
  }
}

NavBar.propTypes = {
  currentUser: PropTypes.string,
};

const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

export default withRouter(NavBarContainer);
