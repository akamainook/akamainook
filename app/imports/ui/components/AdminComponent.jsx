import React from 'react';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Nooks } from '../../api/nook/nook';
import { Bert } from 'meteor/themeteorchef:bert';


/** Renders a single row in the List nook (Admin) table. See pages/ListnookAdmin.jsx. */
class AdminComponent extends React.Component {

  constructor(props) {
    super(props);
    /** When delete is clicked, remove nook */
    this.deleteOnClick = this.deleteOnClick.bind(this);
    /** When approve is clicked, insert nook */
    this.insertOnClick() = this.insertOnClick().bind(this);
  }

  /** When delete button is pressed, ask for confirmation to delete nook */
  deleteOnClick() {
    if(confirm('Are you sure you want to delete this nook?')) {
      Nooks.remove(this.props.nook._id, this.deleteCallback());
    }
  }

  /** When approve button is pressed ask for confirmation to insert nook */
  insertOnClick() {
    if (confirm('Are you sure you want to approve this nook?')) {
      Nooks.add(this.props.nook._id, this.insertCallback());
    }
  }

  /** Bert Message for insertion */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Approval failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Approval succeeded' });
      this.formRef.reset();
    }
  }

  /** Bert Message for deletion */
  deleteCallBack(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: 'Delete Failed' });
    } else {
      Bert.alert({ type: 'success', message: 'Delete Succeded' });
    }
  }

  /** On click, insert the data. */
  approve(data) {
    const { nookName, address, images, description, startHour, endHour, owner, webLink, tags, approval } = data;
    Nooks.insert({
      nookName, address, images,
      description, startHour, endHour, owner, webLink, tags, approval ={ true }
    }, this.insertCallback);
  }
  render() {
    return (
        /** Displays Cards */
        <Card centered>
          <Card.Content>
            {/* Nook Image */}
            <Image src={this.props.nook.image}/>
            {/* Nook Name */}
            <Card.Header>{this.props.nook.nookName}</Card.Header>
            {/* Nook Address  and Hours */}
            <Card.Meta>{this.props.nook.address} {this.nook.startHour} {this.nook.endHour}</Card.Meta>
            {/* Nook Description */}
            <Card.Description>{this.props.nook.image}</Card.Description>
          </Card.Content>
          {/* Nook Owner  && Tags */}
          <Card.Content extra>
            {this.props.nook.owner}
            <Label as={'a'} tag>{this.nook.tags}</Label>
          </Card.Content>
          {/* Nook Approval Buttons */}
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                <Icon name={'checkmark'} />
              </Button>
              <Button basic color='red'>
                <Icon name={'times'} />
              </Button>
            </div>
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
