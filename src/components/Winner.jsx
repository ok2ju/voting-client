import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  propTypes: {
    winner: PropTypes.string,
  },

  mixins: [PureRenderMixin],

  render() {
    return <div ref="winner">Winner is {this.props.winner}!</div>;
  },
});
