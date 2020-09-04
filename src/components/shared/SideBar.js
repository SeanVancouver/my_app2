import React from "react";
import { popBgA, usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";

function SideBar(props) {
  const modalClicked = (profileArr) => {
    props.showModalA(profileArr);
    // props.popBgA(true);
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
          props.usersA();
        }}
      >
        REFRESH
      </Nav.Link>
    </Nav>
  );
}

const mapStateToProps = (state) => {
  return {
    usersR: state.usersR,
    popBgR: state.popBgR,
    FilterR: state.FilterR,
    FilterStateR: state.FilterStateR,
  };
};
export default connect(mapStateToProps, {
  showModalA,
  popBgA,
  usersA,
  filterA,
})(SideBar);
