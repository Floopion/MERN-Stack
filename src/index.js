import React from 'react';
import ReactDOM from 'react-dom';
import {CountrySelection} from './country_selector'
import {Navigation} from './navigation'
import SingleCountry from './country_data'


let nav = document.querySelector('#nav');
let countrySelectBox = document.querySelector('#comboBox');
let info = document.querySelector('#infoArea');


ReactDOM.render(<Navigation /> , nav);
ReactDOM.render(<CountrySelection />, countrySelectBox);
ReactDOM.render(<SingleCountry image={true}/>, info);