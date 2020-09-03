import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { showModalA } from "../../actions";
import FilterModal from "./Modal_content/FilterModal";
// const Modal = (props) => {
//   if (props.ModalR) {
//     console.log("props.PopReducer.name " + JSON.stringify(props.ModalR));

//     debugger;

//     return ReactDOM.createPortal(
//       <div className="popModal">
//         <div>{props.ModalR.name}</div>
//         <div>{props.ModalR.age}</div>
//       </div>,
//       document.querySelector("#modal")
//     );
//   }
//   return "";
// };

const Modal = (props) => {
  useEffect(() => {
    if (props.PopReducer == false) {
      props.showModalA(null);
    }
  }, [props.PopReducer]);

  console.log("props.PopReducer.name " + JSON.stringify(props.ModalR));

  if (props.ModalR && props.PopReducer) {
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
    PopReducer: state.PopReducerState,
  };
};

export default connect(mapStateToProps, { showModalA })(Modal);

// export default Modal;
