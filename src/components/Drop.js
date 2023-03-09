import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';

function Down() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Get Started
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item><Link to={'/customer'}>Customer Sign-Up</Link></Dropdown.Item>
        <Dropdown.Item><Link to={'/restaurant'}>Retaurant Sign-Up</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Down;