import React from 'react';
import { Container, Icon, Grid, Button } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div fluid className="footer-background">
          <Grid container columns={2}>
            <Grid.Column>About Akamai Nook
              <hr/>
              <p>Akamai Nook is a team of college students who want
                to provide a simple and efficient way to find and share
                study spots on Oahu.
              </p>
            </Grid.Column>
            <Grid.Column>Links
              <hr/>
              <Button icon>Our Github Page
                <Icon huge="true" name='github square'/>
              </Button>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
