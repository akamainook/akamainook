import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

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
               <Button as={NavLink} exact to="/nooks" fluid >Browse Nooks</Button>
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
