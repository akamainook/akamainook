import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, Menu, Dropdown } from 'semantic-ui-react';
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
                       position="right">
              HOME
            </Menu.Item>

            {this.props.currentUser ? (
                [<Menu.Item as={NavLink} activeClassName="active"
                            exact to="/addnook" key={'add'}>ADD A SPOT</Menu.Item>,
                  <Menu.Item as={NavLink} activeClassName="active"
                             exact to="/profile" key={'list'}> PROFILE</Menu.Item>]
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeClassName={'active'} exact to={'/admin'} key={'admin'}>Admin</Menu.Item>
            ) : ''}

            <Menu.Item position={'right'}>
              {this.props.currentUser === '' ? (
                  <Dropdown text={'Login'} pointing={'top right'} icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon={'user'} text={'Sign In'} as={NavLink} activeClassName="active" exact
                                     to="/signin"/>
                      <Dropdown.Item icon={'add user'} text={'Sign Up'} as={NavLink} exact
                                     to={'/signup/'}/></Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing={'top right'} icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon={'sign out'} text={'Sign Out'} as={NavLink} exact to={'/signout/'}/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>
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
