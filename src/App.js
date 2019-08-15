import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeFeature, buyItem } from "./actions";


  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  const App = ({ state, removeFeature, buyItem }) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, {removeFeature, buyItem})(App);