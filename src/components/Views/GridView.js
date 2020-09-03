import React, { useEffect } from "react";
import { showModalA } from "../../actions";
import { popBgAction, usersA, filterUsers } from "../../actions";
import { connect } from "react-redux";

const GridView = (props) => {
  // console.log("gridview " + JSON.stringify(props));

  useEffect(() => {
    console.log(" props.FilterStateReducer xxxx " + props.FilterStateReducer);
    props.filterUsers(props.usersR, props.FilterStateReducer);
  }, [props.usersR]);

  const modalClicked = (profileArr) => {
    props.showModalA(profileArr);
    props.popBgAction(true);
  };

  let profilesLoad = props.FilterReducer ? props.FilterReducer : props.usersR;

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
    <div className="gview_container">
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

// const GridView = (props) => {
//   console.log("gridview " + JSON.stringify(props));
//   return <div>text</div>;
// };

const mapStateToProps = (state) => {
  return {
    usersR: state.usersR,
    PopReducer: state.PopReducerState,
    FilterReducer: state.FilterReducer,
    FilterStateReducer: state.FilterStateReducer,
  };
};
export default connect(mapStateToProps, {
  showModalA,
  popBgAction,
  usersA,
  filterUsers,
})(GridView);
