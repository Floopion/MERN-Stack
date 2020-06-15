import React from 'react';
import ReactDOM from 'react-dom';
import {CountrySelection} from './country_selector'
import {Navigation} from './navigation'
import CountryData from './country_data'

let nav = document.querySelector('#nav');
ReactDOM.render(<Navigation /> , nav);

let countrySelectBox = document.querySelector('#comboBox');
ReactDOM.render(<CountrySelection />, countrySelectBox);

let infoBox  = document.querySelector('#infoArea');
ReactDOM.render(<CountryData id="yeeet" />, infoBox);