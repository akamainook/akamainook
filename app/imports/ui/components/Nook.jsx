import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single card in the List Nook table. See pages/ListNook.jsx. */
class Nook extends React.Component {
  render() {
    const tagArray = this.props.nook.tags.map(function (tag, i) {
      return <Label key={i}>{tag}</Label>;
    });
    return (
        <Card>
          <Card.Content>
            <Image size="large" src={this.props.nook.images}/>
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
