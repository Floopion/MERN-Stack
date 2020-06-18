import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CountryData from './country_data'
import SingleCountry from './country_data';

export class CountrySelection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        update: "Loading"
      };
    }

    // If the componants Props change, update the states and run a fetch again to update the box, 
    // This was done this way as I was learning as I build the project, so i have components everywhere. 
    // ideally i would rebuild the project in 1 or 2 files and update this purely with state changes.
    // however due to time constraints I have done it this way for now to deliver a working product. 
    componentWillReceiveProps(newProps){
      
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        update: newProps.update
      }

      fetch("https://web3app.herokuapp.com/countries")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }
  
    //When the component first mounts, get all the countries from the API. catch any errors.
    componentDidMount() {
      fetch("https://web3app.herokuapp.com/countries")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
    
    // Handle change method will runn when the form box is changed, it will re render the Single country componenet with the value (Country ID) of the 
    // currently selected selectbox item.
    handleChange(e){
      ReactDOM.render(<SingleCountry key={countries.value} id={countries.value} />, document.querySelector('#infoArea'));
    }
  
  /*
   * Render method for the component will set the constants to what ever their current state is, the will return the correct div depending on
     the constatnst state. This particular render also returns the select box form, this will load with a default vaule, so that if the delete button is pressed
     a prompt will run asking the user to select a country, this was a UX descision so that the use case or a user accidentally deleting the first
     entry didnt occur. Another UX decision was to build  Pacman (because why not) loader, so that there is some moving feedback and no confusion on 
     if the loader is just stuck or loading.
   */
    render() {
      const { error, isLoaded, items, update } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className={"loaderContainer"}><p className={"loadingText"}>{update} Country List</p><img src="images/pacloader.gif" className={"loaderGif"} /></div>;
      } else {
        return (
          <Form>
            <FormGroup>
              <Input type="select" name="select" ref="countries" id="countries" onChange={this.handleChange}>
                  <option key={"Title"} disabled selected value={"DEFAULT"}>Please Select a Country</option>
                  {items.map(item => (
                    <CountryOption name={item.name} id={item._id.$oid} />
                  ))} 
              </Input>
            </FormGroup>
          </Form>
        );
      }
    }
  }
  
  // Return the current country as a select box option.
  function CountryOption(props) {
    return <option value={props.id} key={props.id} id={props.name}> {props.name} </option>;
  }

  export default CountrySelection;