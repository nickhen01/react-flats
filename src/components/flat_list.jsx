import React, { Component } from 'react';

import Flat from './flat.jsx';
import flats from '../../data/flats.js';

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat imageUrl={flat.imageUrl} name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} key={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
