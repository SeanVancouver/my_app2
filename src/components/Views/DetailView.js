import React, { useEffect } from "react";
import { popBgA, usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";

const DetailView = (props) => {
  useEffect(() => {
    props.filterA(props.usersR, props.FilterStateR);
  }, [props.usersR]);

  let profilesLoad = props.FilterR ? props.FilterR : props.usersR;

  const gridArray = () => {
    return profilesLoad.map((eachProfile) => {
      return (
        <div key={eachProfile.id} className="flex">
          <img src={eachProfile.image}></img>
          <div className="detail-text">
            <div className="flex stats">
              <h5>{eachProfile.name},&nbsp;</h5>
              <h5>{eachProfile.age},&nbsp;</h5>
              <h5>{eachProfile.sex}</h5>
            </div>
            <div className="desc">{eachProfile.desc}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="view_container">
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
