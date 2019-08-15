import React, { useState } from 'react';
import { buyItem } from '../actions';


class AdditionalFeature extends React.Component {
  constructor(props) {
    super(props)
  };

  buyItem = e => {
    e.preventDefault();
    this.props.buyItem(this.props.feature);
  };

  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        < button onClick={this.buyItem} className="button" > Add</button >
        {this.props.feature.name}(+{this.props.feature.price})
    </li >
    );
  }
};

export default AdditionalFeature;
