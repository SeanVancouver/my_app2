import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { showModalA } from "../../actions";
import FilterModal from "./Modal_content/FilterModal";

const Modal = (props) => {
  useEffect(() => {
    if (props.popBgR == false) {
      props.showModalA(null);
    }
  }, [props.popBgR]);

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
  }
  return "";
};

const mapStateToProps = (state) => {
  return {
    ModalR: state.ModalR,
    popBgR: state.popBgR,
  };
};

export default connect(mapStateToProps, { showModalA })(Modal);

// export default Modal;
