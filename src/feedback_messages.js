import React, {Component} from 'react';
import SingleCountry from './country_data'
import {CountrySelection} from './country_selector'

// Hide Component can accept whether it should be shown, what type of message it is,
// and the message to display.
class FeedbackMessage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hide: props.hide,
        error: props.error,
        feedbackMessage: props.message
      };
    }
  
    componentWillReceiveProps(nextProps){
      
      this.state = {
        hide: nextProps.hide,
        error: nextProps.error,
        feedbackMessage: nextProps.message
      };
   }
    // Render checks to see if the message needs to be displayed or not,
    // If it does it checks what kind of message it is and applies the corretct class
    // and then puts the recieved error into the div
    render() {

      const countrySelectBox = document.querySelector('#comboBox');
      const info = document.querySelector('#infoArea');
      const {error, feedbackMessage, hide} = this.state;

      ReactDOM.render(<CountrySelection update={"Updating"} />, countrySelectBox);
      ReactDOM.render(<SingleCountry image={true}/>, info);
 

      if(hide){
          return <div></div>;
      }else if(error){
        return <div><p className={"errorMessage"}>{feedbackMessage}</p></div>
      }else{
        return <div><p className={"successMessage"}>{feedbackMessage}</p></div>
      }
            
    }
  }
  
  
  
  export default FeedbackMessage;