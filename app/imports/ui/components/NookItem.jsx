import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Nook table. See pages/ListNook.jsx. */
class NookItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.nook.name}</Table.Cell>
          <Table.Cell>{this.props.nook.quantity}</Table.Cell>
          <Table.Cell>{this.props.nook.condition}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.nook._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
NookItem.propTypes = {
  nook: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(NookItem);
