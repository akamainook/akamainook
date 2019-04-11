import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Image, Card, Icon, Button } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItemAdmin from '/imports/ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {
  /** Render the page once subscriptions have been received. */
  render() {
    return (
        <Container>
         <Header as="h2" textAlign="center">Pending Spots</Header>
         <Card centered>
           <Card.Content>
             <Image floated={'right'} size={'mini'} src={'http://www.ics.hawaii.edu/' +
             'wp-content/uploads/2015/09/post318b.jpg'}/>
             {/* Name of Person */}
             <Card.Header>Philip Johnson</Card.Header>
             {/* Name of Spot */}
             <Card.Meta>ICSpace</Card.Meta>
             {/* Description of Spot */}
             <Card.Description>
               Pacific Ocean Science and Technology (POST) Building, POST 318B
             </Card.Description>
             {/* Approval/Disproval Buttons */}
             <Button>
               <Icon color='green' name={'checkmark'}/>
             </Button>
             <Button>
               <Icon color='red' name={'close'}/>
             </Button>
           </Card.Content>
         </Card>
       </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuffAdmin);
