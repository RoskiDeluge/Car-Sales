import React from 'react';
import { buyItem, removeFeature } from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { isPropertySignature } from 'typescript';

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    buyItem(item);
    // props.buyItem(item);
    // props.updateTotalPrice(item.price);
  };

  return (
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
  );
};

export default App;
