import React from 'react';
import { Container, Image, Grid, Input, Card, Label, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    return (
        <div className="middleContent">
          <Container>
            <Grid fluid container rows={5}>
              <Grid.Row centered className="logoPlaceholder">
                <p id="akamai">Akamai</p><p id="nook">Nook</p>
              </Grid.Row>
              <Grid.Row>
                <p id="description">
                  Welcome to Akamai Nook. Does studying at Hamilton five days a week drives you nuts? We are a
                  user-based website that relies on real people and real reviews to decide where is the best place
                  to
                  study. Find a new nook for you today by searching up some key words or select your categories.
                </p>
              </Grid.Row>
              <Grid.Row>
                <Input id="searchBar" floated='right' icon='search' placeholder='Find your Nook'/>
              </Grid.Row>
              <Grid.Row>
                <Button>Air Conditioned</Button>
                <Button>WiFi</Button>
                <Button>Able to eat</Button>
                <Button>Quiet</Button>
                <Button>Populated</Button>
                <Button>Scenic</Button>
              </Grid.Row>
              <Grid.Row className="cards">
                <Grid fluid container columns={3}>
                  <Grid.Column>
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
                  <Grid.Column>
                    <Card fluid>
                      <Image src="rec2.jpg" height="170px"/>
                      <Card.Content>
                        <Card.Header>Campus Center</Card.Header>
                        <Card.Meta>
                          <span className='location'>2465 Campus Rd, Honolulu, HI 96822</span>
                        </Card.Meta>
                        <Card.Description>A populated place conveniently locted near food and beverage
                          stores. </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label as='a' tag>
                          Populated
                        </Label>
                        <Label as='a' tag>
                          Outdoor
                        </Label>
                        <Label as='a' tag>
                          Ample restrooms
                        </Label>
                        <Label as='a' tag>
                          Restaurants nearby
                        </Label>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card fluid>
                      <Image src="rec3.jpg" height="170px"/>
                      <Card.Content>
                        <Card.Header>The Quad</Card.Header>
                        <Card.Meta>
                          <span className='location'>In front of Hawaii Hall</span>
                        </Card.Meta>
                        <Card.Description>Enjoy the outdoor breeze by studying at the beautiful quad.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label as='a' tag>
                          Outdoor
                        </Label>
                        <Label as='a' tag>
                          Scenic
                        </Label>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid>
          </Container>
          <p id="credit"><a className="linkColor" href="http://manoa.hawaii.edu/ctahr/nutritionPhD/
                            college-university-of-hawaii/">Hamilton Library 1st Floor</a></p>
        </div>
    );
  }
}

export default withRouter(Landing);
