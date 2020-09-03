import React, { useEffect } from "react";
import { popBgA, usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";

const GridView = (props) => {
  // console.log("gridview " + JSON.stringify(props));

  useEffect(() => {
    props.filterA(props.usersR, props.FilterStateR);
  }, [props.usersR]);

  const modalClicked = (profileArr) => {
    props.showModalA(profileArr);
    props.popBgA(true);
  };

  let profilesLoad = props.FilterR ? props.FilterR : props.usersR;

  // console.log('+++++' + JSON.stringify(profilesLoad) + ' ------- ' + JSON.stringify(props.usersR) );

  const gridArray = () => {
    // return props.usersR.map((eachProfile) => {
    return profilesLoad.map((eachProfile) => {
      // console.log(eachProfile);
      return (
        <div key={eachProfile.id} className="grid_image">
          <img
            src={eachProfile.image}
            onClick={() => {
              modalClicked({
                modalType: "profile",
                id: eachProfile.id,
                image: eachProfile.image,
                name: eachProfile.name,
                age: eachProfile.age,
                sex: eachProfile.sex,
                // desc: eachProfile.desc,
              });
            }}
          ></img>
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
      <div className="grid_wrapper">{gridArray()}</div>
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
})(GridView);
