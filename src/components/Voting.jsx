import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  propTypes: {
    winner: PropTypes.string,
  },

  mixins: [PureRenderMixin],

  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner'),
  };
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
