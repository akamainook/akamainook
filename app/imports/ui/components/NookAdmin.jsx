import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the List Nook table. See pages/ListNook.jsx. */
class NookAdmin extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image fluid src={this.props.nook.images} size="large"/>
          </Card.Content>
          <Card.Content>
            <Card.Header>{this.props.nook.nookName}</Card.Header>
            <Card.Meta>{this.props.nook.address}</Card.Meta>
            <Card.Meta>{this.props.nook.startHour} - {this.props.nook.endHour}</Card.Meta>
            <Card.Description>
              {this.props.nook.description}
            </Card.Description>
            <Label as='a' tag>
              {this.props.nook.tags}
            </Label>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.nook._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
NookAdmin.propTypes = {
  nook: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(NookAdmin);
