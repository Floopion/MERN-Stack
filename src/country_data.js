import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class CountryData extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (<p>{this.props.id}</p>);
  }
}



export default CountryData;