import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Alert
} from 'reactstrap';
import CountrySelection from './country_selector'
import confirm from 'reactstrap-confirm'
import FeedbackMessage from './feedback_messages'
import NewCountry from './new_country'
import ReactDOM from 'react-dom'

export const Navigation = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Fixed Async Function error with help from https://github.com/babel/babel/issues/9849
  // reactstrap-Create installed from https://www.npmjs.com/package/reactstrap-confirm and modified to my needs.
  async function deleteCountry(){
    
    const requestOption = {
      method: 'DELETE'
    };
    const messageArea = document.querySelector('#feedbackText');

    // Confirmation popup box waits to proceed untill input has been recieved 
    let confirmation = await confirm(
      {title: (<><strong>Warning</strong></>),
        message: "Are you sure you want to delete the currently selected country? This CANNOT be undone.",
        confirmText: "Delete Country",
        confirmColor: "success",
        cancelText: "No wait, I made a mistake!",
        cancelColor: "danger"
      });
    
      // if confirmation is recieved that the user wants to delete the country, send a delete request to the API
      // If there is no country selected return an error message
    if(confirmation){
      if(countries.value == "DEFAULT"){  
        ReactDOM.render(<FeedbackMessage hide={false} error={true} message={"Please Select a Country"} />, messageArea)
      }else{
        await fetch("https://web3app.herokuapp.com/countries/" + countries.value, requestOption)
        .then(res => {
          ReactDOM.render(<FeedbackMessage hide={false} error={false} message={"Success! Country Has been Deleted From Database."} />, messageArea);
        })
        .catch(err => {
          ReactDOM.render(<FeedbackMessage hide={false} error={true} message={err} />, messageArea);
        });                 
      };
    }
  }

  return (
   
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Web 3 MERN Stack</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem id="newCountry">
              {NewCountry}
            </NavItem>
            <NavItem>
              <Button outline color="danger" onClick={deleteCountry}>Delete Selected Country</Button>
            </NavItem>
          </Nav>
          <NavbarText>Dion Bedford</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );


}



