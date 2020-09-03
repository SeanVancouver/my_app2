import React from "react";
import { connect } from "react-redux";
import { popBgA } from "../../actions";

const ModalBg = (props) => {
  const closePopBG = () => {
    props.popBgA(false);
  };

  let bgType = "";

  if (props.popBgR && props.ModalR) {
    bgType = "show dark";
  } else if (props.popBgR && !props.ModalR) {
    bgType = "show";
  }

  return <div id="popBG" className={bgType} onClick={() => closePopBG()}></div>;
};

const mapStateToProps = (state) => {
  return {
    popBgR: state.popBgR,
    ModalR: state.ModalR,
  };
};

export default connect(mapStateToProps, { popBgA })(ModalBg);
