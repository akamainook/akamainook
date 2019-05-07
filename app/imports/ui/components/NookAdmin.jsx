import React from 'react';
import { Card, Image, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Nooks } from '../../api/nook/nook';

/** Renders a single card in the List Nook table. See pages/ListNook.jsx. */
class NookAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (confirm('Are you sure you want to delete this nook?')) {
      Nooks.remove(this.props.nook._id, this.deleteCallBack);
    }
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: 'Delete failed' });
    }
    else {
      Bert.alert({ type: 'success', message: 'Delete successful' });
    }
  }

  render() {
    const tagArray = this.props.nook.tags.map(function (tag, i) {
      return <Label key={i}>{tag}</Label>;
    });
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
          </Card.Content>
          <Card.Content>
            {tagArray}
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.nook._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={this.onClick}>Delete</Button>
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
