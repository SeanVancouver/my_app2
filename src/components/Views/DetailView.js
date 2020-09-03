import React, { useEffect } from "react";
import { popBgA, usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";

const DetailView = (props) => {
  useEffect(() => {
    props.filterA(props.usersR, props.FilterStateR);
  }, [props.usersR]);

  const modalClicked = (profileArr) => {
    props.showModalA(profileArr);
    props.popBgA(true);
  };

  let profilesLoad = props.FilterR ? props.FilterR : props.usersR;

  const gridArray = () => {
    return profilesLoad.map((eachProfile) => {
      return (
        <div key={eachProfile.id} className="">
          <img src={eachProfile.image}></img>
          <div>{eachProfile.name}</div>
          <div>{eachProfile.age}</div>
          <div>{eachProfile.sex}</div>
          <div>{eachProfile.desc}</div>
        </div>
      );
    });
  };
  return (
    <div className="view_container">
      <div className="filter">
        <button
          onClick={() => {
            modalClicked({ modalType: "filter" });
          }}
        >
          F<br />I<br />L<br />T<br />E<br />R
        </button>
        <button
          onClick={() => {
            props.usersA();
          }}
        >
          R<br />E<br />F<br />R<br />E<br />S<br />H
        </button>
      </div>
      <div className="">{gridArray()}</div>
    </div>
  );
};

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
})(DetailView);
