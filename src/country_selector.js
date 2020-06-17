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
        refresh: props.refresh
      };
    }

    refresh(){
      const props = this.state;

      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      }

      if(props.refresh){
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
    }

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
    
    handleChange(e){
      ReactDOM.render(<SingleCountry key={countries.value} id={countries.value} />, document.querySelector('#infoArea'));
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className={"loaderContainer"}><p className={"loadingText"}>Loading Country List</p><img src="images/pacloader.gif" className={"loaderGif"} /></div>;
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
  
  function CountryOption(props) {
    return <option value={props.id} key={props.id} id={props.name}> {props.name} </option>;
  }

  export default CountrySelection;