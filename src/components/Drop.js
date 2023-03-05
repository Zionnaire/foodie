import Dropdown from 'react-bootstrap/Dropdown';

function Down() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Get Started
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Customer Sign-Up</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Retaurant Sign-Up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Down;