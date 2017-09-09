import React, { Component } from 'react';
import './App.css';
import Carousell from './carousell/Carousell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousell
          imgs={[
            'https://assets-17app.akamaized.net/THUMBNAIL_9880EA08-1B00-4C6D-9214-EE4755B97CFB.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_0C4DCEC0-A0BD-4796-A72D-50C5B0A1FB53.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_e39e5eb1-862a-40f1-9fec-e12d3c5d79fd.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_B936E6F4-C40B-4249-AFA3-69B16C50E9DA.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_2525D490-6F0A-4353-9607-B62C2E55269D.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_adc24a4a-6c5d-4e7f-84bf-30c03408d024.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_572EEF7B-C14E-4D68-93C3-60BBCE0BDCD5.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_20F2CEC7-7FCB-49F3-94F2-F01577880912.jpg',
            'https://assets-17app.akamaized.net/THUMBNAIL_438DA355-982F-48ED-B38A-6DFFEFA5DE95.jpg',
          ]}
        />
      </div>
    );
  }
}

export default App;
