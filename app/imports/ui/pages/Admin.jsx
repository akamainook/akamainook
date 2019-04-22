import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import AdminComponent from 'app/imports/ui/components/AdminComponent.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Admin extends React.Component {

  /* constructor(props) {
    super(props);
    // When delete is clicked, remove nook
    this.deleteOnClick = this.deleteOnClick.bind(this);
    // When approve is clicked, insert nook
    this.insertOnClick() = this.insertOnClick().bind(this);
  }

// When delete button is pressed, ask for confirmation to delete nook
  deleteOnClick() {
    if(confirm('Are you sure you want to delete this nook?')) {
      Nooks.remove(this.props.nook._id, this.deleteCallback());
    }
  }

// When approve button is pressed ask for confirmation to insert nook
  insertOnClick() {
    if (confirm('Are you sure you want to approve this nook?')) {
      Nooks.add(this.props.nook._id, this.insertCallback());
    }
  }

  // Bert Message for insertion
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Approval failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Approval succeeded' });
      this.formRef.reset();
    }
  }

  // Bert Message for deletion
  deleteCallBack(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: 'Delete Failed' });
    } else {
      Bert.alert({ type: 'success', message: 'Delete Succeded' });
    }
  }

  // On click, insert the data.
  approve(data) {
    const { nookName, address, images, description, startHour, endHour, owner, webLink, tags, approval } = data;
    Nooks.insert({
      nookName, address, images,
      description, startHour, endHour, owner, webLink, tags, approval ={ true }
    }, this.insertCallback);
  }
  */

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
    nooks: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Admin);
