import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const itemStyle = { color: 'white' };
    return (
        <div className="navBar-background">
          <Menu attached="top" borderless>
            <Menu.Item as={NavLink} activeClassName="" exact to="/" style={itemStyle}>
              <Image size='small' src='logo.png'/>
            </Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to="/nooks" position="right"
                       key='nooks' style={itemStyle}>Nooks</Menu.Item>
            {this.props.currentUser ? (
                [<Menu.Item as={NavLink} activeClassName="active" exact to="/addnook"
                            key='addnook' style={itemStyle}>Add Nooks</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/profile"
                           key='profile' style={itemStyle}>Profile</Menu.Item>,
                    ],
                [<Menu.Item as={NavLink} activeClassName="active" exact to="/addnook"
                            key='addnook' style={itemStyle}>Add Nooks</Menu.Item>,
                    <Menu.Item as={NavLink} activeClassName="active" exact to="/mynooks"
                               key='mynooks' style={itemStyle}>My Nooks</Menu.Item>,
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/profile"
                             key='profile' style={itemStyle}>Profile</Menu.Item>,
                ]
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeClassName="active" exact to="/admin"
                           key='admin' style={itemStyle}>Admin</Menu.Item>
            ) : ''}
            <Menu.Item>
              {this.props.currentUser === '' ? (
                  <Dropdown text="Login" pointing="top right" icon={'user'} style={itemStyle}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                      <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'} style={itemStyle}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
