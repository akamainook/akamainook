import React from 'react';
import { Button, Feed, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ApprovalButtons extends React.Component {
  render() {
    return (
        <Feed.Event>
          <Feed.Content>
            <div className='ui two buttons'>
            <Button basic color='green'>
              <Icon name={'checkmark'} />
            </Button>
            <Button basic color='red'>
              <Icon name={'times'} />
            </Button>
          </div>
          </Feed.Content>
        </Feed.Event>
    );
  }
}

ApprovalButtons.propTypes = {
  approve: PropTypes.object.isRequired,
};

export default withRouter(ApprovalButtons);
