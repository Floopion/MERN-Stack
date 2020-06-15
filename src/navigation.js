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

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function alertB(e) {
    e.preventDefault();
    alert(countries.value);
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Web 3 MERN Stack</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Button outline color="success" onClick={alertB}>Add New Country</Button>
            </NavItem>
            <NavItem>
              <Button outline color="danger">Delete Selected Country</Button>
            </NavItem>
            {/* <NavItem>
              <Button outline color="warning">Edit Selected Country</Button>
            </NavItem> */}
          </Nav>
          <NavbarText>Dion Bedford</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

