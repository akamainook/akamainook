import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List nook (Admin) table. See pages/ListnookAdmin.jsx. */
class AdminComponent extends React.Component {

  needsApproval(nook) {
    if (this.props.nook.approved === false) {
      this.render();
    }
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image src={this.props.nook.image}/>
            <Card.Header>{this.props.nook.nookName}</Card.Header>
            <Card.Meta>{this.props.nook.address} {this.nook.startHour} {this.nook.endHour}</Card.Meta>
            <Card.Description>{this.props.nook.image}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.nook.owner}
            <Label as={'a'} tag>{this.nook.tags}</Label>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
AdminComponent.propTypes = {
  nook: PropTypes.object.isRequired,
};

export default withRouter(AdminComponent);
