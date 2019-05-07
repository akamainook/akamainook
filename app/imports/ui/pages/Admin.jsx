import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Card } from 'semantic-ui-react';
import { Nooks } from '/imports/api/stuff/stuff';
import AdminComponent from '/imports/ui/components/AdminComponent.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Admin extends React.Component {
  render() {
    return (
        <Container>
          <Header as={'h2'} textAlign={'center'} inverted>Pending Spots</Header>
          <Card.Group>
            {this.props.nook.map((nook, index) => <AdminComponent key={index} nook={nook}/>)}
          </Card.Group>
        </Container>
    );
  }

  renderPage() {
    return (
        <Container>
          <Header as={'h2'} textAlign={'center'} inverted>Pending Approval</Header>
          <Card.Group>
            {this.props.nook.map((nook, index) => <AdminComponent key={index} nook={nook} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Admin.propTypes = {
  nook: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AdminComponent');
  return {
    nooks: Nooks.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Admin);
