import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Nook table. See pages/ListNook.jsx. */
class Nook extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>{this.props.nook.nookName}</Card.Header>
            <Card.Meta>{this.props.nook.address}</Card.Meta>
            <Card.Description>
              {this.props.nook.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.nook.owner} nookId={this.props.nook._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Nook.propTypes = {
  nook: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Nook);
