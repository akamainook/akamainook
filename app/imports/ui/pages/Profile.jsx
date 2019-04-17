import React from 'react';
import { Grid, Container, Header, Image, Card, Label, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the Home page. */
class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var user = JSON.parse(localStorage.getItem('user'));

    return (
        <Container className="profile">
          <Grid container>
            <Grid.Column width={6}>
              <Image size={'medium'}
                     src={'https://cdn.vox-cdn.com/thumbor/81dix4pSzNqGq5Lq0PYmALAtWPc=/0x0:1920x803/1200x800/filters:focal(1140x0:1446x306)/cdn.vox-cdn.com/uploads/chorus_image/image/62934392/detective_pikachu_trailer_25_1920.0.jpg'} circular/>
              <Header centered>{user.email}</Header>
              <p>I am a undergraduate student that is developing this site!</p>
              <NavLink to="/edit">Edit Profile</NavLink>
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

export default Profile;
