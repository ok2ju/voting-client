import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  propTypes: {
    pair: PropTypes.array,
    hasVoted: PropTypes.bool,
    vote: PropTypes.func,
  },

  mixins: [PureRenderMixin],

  getPair() {
    return this.props.pair || [];
  },

  isDisabled() {
    return !!this.props.hasVoted;
  },

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  },

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )}
      </div>
    );
  },
});
