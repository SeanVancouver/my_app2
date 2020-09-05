import React, { useEffect } from "react";
import { usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";

const DetailView = (props) => {
  let profilesLoad = props.FilterR;

  const gridArray = () => {
    return profilesLoad.map((eachProfile) => {
      return (
        <div key={eachProfile.id} className="flex">
          <img src={eachProfile.image}></img>
          <div className="detail-text">
            <div className="flex stats">
              <h5>{eachProfile.name},&nbsp;</h5>
              <h5>{eachProfile.age},&nbsp;</h5>
              <h5>{eachProfile.gender}</h5>
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
    FilterR: state.FilterR,
    FilterStateR: state.FilterStateR,
  };
};
export default connect(mapStateToProps, {
  showModalA,
  usersA,
  filterA,
})(DetailView);
