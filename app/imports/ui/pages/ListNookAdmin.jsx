import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Nooks } from '/imports/api/nook/nook';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NookAdmin from '/imports/ui/components/NookAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListNookAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Listed Nooks</Header>
          <Card.Group>
            {this.props.nooks.map((nook, index) => <NookAdmin key={index} nook={nook}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListNookAdmin.propTypes = {
  nooks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('NookAdmin');
  return {
    nooks: Nooks.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(ListNookAdmin);
