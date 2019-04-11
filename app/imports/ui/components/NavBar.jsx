import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><h1>Akamai Nook</h1></Menu.Item>
            <Menu.Item position="right">HOME</Menu.Item>
            <Menu.Item>ADD A SPOT</Menu.Item>
            <Menu.Item>PROFILE</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
