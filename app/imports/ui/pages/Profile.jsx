import React from 'react';
import { Grid, Card, Container, Header, Image, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the Home page. */
class Profile extends React.Component {
  render() {
    return (
        <Container>
          <Grid columns={2} divided>
            <Grid.Column>
              <Image size={'medium'} src={'http://www.ics.hawaii.edu/' +
              'wp-content/uploads/2015/09/post318b.jpg'} circular/>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Button size={'huge'} color={'red'}>Change Email</Button>
              </Grid.Row>
              <Grid.Row>
                <Button size={'huge'} color={'red'}> Change Password</Button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Header as="h2" textAlign="center">Your Spots</Header>
          <Card centered>
            <Card.Content>
              {/* Name of Spot */}
              <Card.Meta>ICSpace</Card.Meta>
              {/* Description of Spot */}
              <Card.Description>
                Pacific Ocean Science and Technology (POST) Building, POST 318B
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
    );
  }
}

export default Profile;
