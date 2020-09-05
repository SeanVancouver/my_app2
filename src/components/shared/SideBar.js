import React from "react";
import { usersA, showModalA } from "../../actions";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";

function SideBar(props) {
  const modalClicked = (profileArr) => {
    console.log("profileArr " + JSON.stringify(profileArr));
    props.showModalA(profileArr);
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link
        onClick={() => {
          modalClicked({ modalType: "filter" });
        }}
      >
        FILTER
      </Nav.Link>
      <Nav.Link
        onClick={() => {
          props.usersA(props.FilterStateR);
        }}
      >
        REFRESH
      </Nav.Link>
    </Nav>
  );
}

const mapStateToProps = (state) => {
  return {
    FilterR: state.FilterR,
    FilterStateR: state.FilterStateR,
  };
};
export default connect(mapStateToProps, {
  showModalA,
  usersA,
})(SideBar);
