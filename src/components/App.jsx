import React from 'react';
import { List, Map } from 'immutable';

const pair = List.of('Transpotting', '28 Days Later');
const tally = Map({'Transpotting': 5, '28 Days Later': 4});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});
