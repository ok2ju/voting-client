import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
  },

  render() {
    return this.props.children;
  },
});
