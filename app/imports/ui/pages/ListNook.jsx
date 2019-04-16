import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Nooks } from '/imports/api/nook/nook';
import NookItem from '/imports/ui/components/nookItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the nook documents. Use <nookItem> to render each row. */
class ListNook extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List nook</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Condition</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.Nooks.map((nook) => <NookItem key={nook._id} nook={nook} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of nook documents in the props. */
ListNook.propTypes = {
  Nooks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to nook documents.
  const subscription = Meteor.subscribe('nook');
  return {
    Nooks: Nooks.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListNook);
