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
  Button
} from 'reactstrap';
import CountryOption from './country_selector'
import confirm from 'reactstrap-confirm'

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Web 3 MERN Stack</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Button outline color="success">Add New Country</Button>
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

  // Fixed Async Function error with help from https://github.com/babel/babel/issues/9849
  // reactstrap-Create installed from https://www.npmjs.com/package/reactstrap-confirm and modified to my needs.
  async function deleteCountry(){
    let Confirmation =await confirm(
      {title: (<><strong>Warning</strong></>),
        message: "Are you sure you want to delete the currently selected country? This CANNOT be undone.",
        confirmText: "Delete Country",
        confirmColor: "success",
        cancelText: "No wait, I made a mistake!",
        cancelColor: "danger"
      });
  }
}



