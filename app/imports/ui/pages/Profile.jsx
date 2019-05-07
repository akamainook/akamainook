import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Container, Header, Image, Card, Label, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Nooks } from '/imports/api/nook/nook';
import NookAdmin from '/imports/ui/components/NookAdmin';

/** A simple static component to render some text for the Home page. */
class Profile extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
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
              <Card.Group>
                {this.props.nooks.map((nook, index) => <NookAdmin key={index} nook={nook}/>)}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

Profile.propTypes = {
  nooks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('MyNooks');
  return {
    nooks: Nooks.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(Profile);
