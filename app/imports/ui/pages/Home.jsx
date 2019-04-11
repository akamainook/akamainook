import React from 'react';
import { Grid, Input, Embed, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the Home page. */
class Home extends React.Component {
  render() {
    return (
        <div className="main-background">
          <div className="center-class">
            <Container>
              <Grid columns={2}>
                <Grid.Column>
                  <Embed
                      defaultActive='true'
                      url='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVdiAlZhtAHwR9NKOg97yY6w&key=AIzaSyCRDPjPd6VNBZNTkiJ9Ad46v3t7BYEAymg'
                  />
                </Grid.Column>
                <Grid.Column textAlign="centered">
                  <div className="center-class">
                    <Input fluid icon='search' placeholder='Search...'/>
                  </div>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        </div>
    );
  }
}

export default Home;
