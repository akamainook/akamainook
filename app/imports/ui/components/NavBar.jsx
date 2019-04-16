import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <h1>Akamai Nook</h1></Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active"
                       exact to="/home"
                       position="right">HOME</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active"
                       exact to="/addnook">ADD A SPOT</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active"
                       exact to="/profile">PROFILE</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active"
                       exact to="/signin">LOGIN</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
