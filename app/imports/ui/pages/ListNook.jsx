import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Grid } from 'semantic-ui-react';
import { Nooks } from '/imports/api/nook/nook';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Nook from '/imports/ui/components/Nook';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListNook extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Nooks</Header>
              <Card.Group>
                {this.props.nooks.map((nook, index) => <Nook key={index} nook={nook}/>)}
              </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListNook.propTypes = {
  nooks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Nooks');
  return {
    nooks: Nooks.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(ListNook);
