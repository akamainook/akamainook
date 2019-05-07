import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Container, Header, Image, Card, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Nooks } from '../../api/nook/nook';

/** A simple static component to render some text for the Home page. */
class Profile extends React.Component {
  render() {
    return (
        <Container className="profile">
          <Grid container>
            <Grid.Column width={6}>
              <Image size={'medium'}
                     src={Meteor.user().profile.image}/>
              <Header>{Meteor.user().emails[0].address}</Header>
              <NavLink to="/editProfile">Edit Profile</NavLink>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Your Nooks:</Header>
              <Card fluid>
                <Image src="rec1.jpg"/>
                <Card.Content>
                  <Card.Header>ICSpace</Card.Header>
                  <Card.Meta>
                    <span className='location'>POST 318B</span>
                  </Card.Meta>
                  <Card.Description>A study room for ICS majors to gather up their ideas.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label as='a' tag>
                    Microwave
                  </Label>
                  <Label as='a' tag>
                    Air conditioned
                  </Label>
                  <Label as='a' tag>
                    WiFi
                  </Label>
                  <Label as='a' tag>
                    Outlets
                  </Label>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

Profile.propTypes = {
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('ProfileNooks');
  return {
    nooks: Nooks.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(Profile);
