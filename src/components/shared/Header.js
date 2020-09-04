import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <NavDropdown title="VIEWS" className="views">
        <NavDropdown.Item>
          <Link to="/view-grid">Grid</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/view-detail">Detail</Link>
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="CONTACTS" disabled>
        <NavDropdown.Item>
          <Link to="/chat">Chat</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/groups">Groups</Link>
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="SETTING" disabled>
        <NavDropdown.Item>
          <Link to="/profile">Profile</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/account">My account</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/logout">Logout</Link>
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default Header;
