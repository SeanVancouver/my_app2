import React from "react";
import { connect } from "react-redux";
import { popBgAction } from "../../actions";

const ModalBg = (props) => {
  const closePopBG = () => {
    props.popBgAction(false);
  };

  let bgType = "";

  if (props.PopReducer && props.ModalR) {
    bgType = "show dark";
  } else if (props.PopReducer && !props.ModalR) {
    bgType = "show";
  }

  return (
    <div
      id="popBG"
      // className={`${props.PopReducer ? "show" : ""}`}
      className={bgType}
      onClick={() => closePopBG()}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    PopReducer: state.PopReducerState,
    ModalR: state.ModalR,
  };
};

export default connect(mapStateToProps, { popBgAction })(ModalBg);
