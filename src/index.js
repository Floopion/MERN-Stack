import React from 'react';
import ReactDOM from 'react-dom';
import {CountrySelection} from './country_selector'
import {Navigation} from './navigation'

let nav = document.querySelector('#nav');
ReactDOM.render(<Navigation /> , nav);

let countrySelectBox = document.querySelector('#comboBox');
ReactDOM.render(<CountrySelection />, countrySelectBox);

// let infoBox  = document.querySelector('#infoArea');
// ReactDOM.render(<CountrySelection />, infoBox);
