import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { marginTop: '10px' };
    return (
        <div style={menuStyle} className="footer-background">
          <Grid container columns={3}>
            <Grid.Column>Navigation
              <hr/>
              <List>
                <List.Item as={NavLink} activeClassName="active" exact to="/" key='/'>Home</List.Item>
                <List.Item as={NavLink} activeClassName="active" exact to="/nooks" key='nooks'>Nooks</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>About Akamai Nook
              <hr/>
              <p>Akamai Nook is created by a team of college students who want
                to provide a simple and efficient way to find and share
                study spots on Oahu.
              </p>
            </Grid.Column>
            <Grid.Column> Credits
              <hr/>
              <List>
                <List.Item>Background images:</List.Item>
                <List.Item>www.pexels.com</List.Item>
                <List.Item>Logos created using:</List.Item>
                <List.Item>www.logomakr.com</List.Item>
                <List.Item>User icons provided by:</List.Item>
                <List.Item>www.flaticon.com</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
