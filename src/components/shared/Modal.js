import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { showModalA } from "../../actions";
import Filter from "./Modal_content/Filter";
import Profile from "./Modal_content/Profile";
import { Modal } from "react-bootstrap";

const MyModal = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    props.showModalA(false);
  };

  if (props.ModalR) {
    if (props.ModalR.modalType == "profile") {
      return (
        <Modal show={props.ModalR !== false} onHide={() => handleClose()}>
          <Profile profile={props.ModalR} />
        </Modal>
      );
    } else if (props.ModalR.modalType == "filter") {
      return (
        <Modal show={props.ModalR !== false} onHide={() => handleClose()}>
          <Filter submitClose={handleClose} />
        </Modal>
      );
    }
  }
  return "";
};

const mapStateToProps = (state) => {
  return {
    ModalR: state.ModalR,
  };
};

export default connect(mapStateToProps, { showModalA })(MyModal);

// export default Modal;
