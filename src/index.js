import React from 'react';
import ReactDOM from 'react-dom';
import {CountrySelection} from './country_selector'
import {Navigation} from './navigation'
import SingleCountry from './country_data'

// Constants so i can specify where to put my components based on the divs i have made in my pug file
const nav = document.querySelector('#nav');
const countrySelectBox = document.querySelector('#comboBox');
const info = document.querySelector('#infoArea');


// Create an instance of each Component at its specified div. This essentially builds my page on page load.
ReactDOM.render(<Navigation hide={true} message={""} error={false} /> , nav);
ReactDOM.render(<CountrySelection />, countrySelectBox);
ReactDOM.render(<SingleCountry image={true}/>, info);
