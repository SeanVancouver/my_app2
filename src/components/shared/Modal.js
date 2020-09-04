import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { showModalA } from "../../actions";
import FilterModal from "./Modal_content/FilterModal";
import { Modal } from "react-bootstrap";

const myModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (props.popBgR == false) {
      props.showModalA(null);
    }
  }, [props.popBgR]);

  const renderModal = () => {
    if (props.ModalR && props.popBgR) {
      if (props.ModalR.modalType == "profile") {
        return (
          <div className="popModal">
            <div>{props.ModalR.name}</div>
            <div>{props.ModalR.age}</div>
            <div>{props.ModalR.sex}</div>
            <div>{props.ModalR.desc}</div>
          </div>
        );
      }

      if (props.ModalR.modalType == "filter") {
        return <FilterModal />;
      }
      return "";
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {renderModal()}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    ModalR: state.ModalR,
    popBgR: state.popBgR,
  };
};

export default connect(mapStateToProps, { showModalA })(myModal);

// export default Modal;
