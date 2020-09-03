import React, {useEffect} from "react";
import { showModal } from "../actions";
import { popBgAction, fetchUsers, filterUsers } from "../actions";
import { connect } from "react-redux";

const GridView = (props) => {
  // console.log("gridview " + JSON.stringify(props));

  useEffect(() => {
    console.log(' props.FilterStateReducer xxxx ' + props.FilterStateReducer);
    props.filterUsers(props.ProfileReducer, props.FilterStateReducer);
  }, [props.ProfileReducer]);


  const modalClicked = (profileArr) => {
    props.showModal(profileArr);
    props.popBgAction(true);
  };

  let profilesLoad = props.FilterReducer
    ? props.FilterReducer
    : props.ProfileReducer;

  // console.log('+++++' + JSON.stringify(profilesLoad) + ' ------- ' + JSON.stringify(props.ProfileReducer) );

  const gridArray = () => {
    // return props.ProfileReducer.map((eachProfile) => {
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
                desc: eachProfile.desc,
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
            props.fetchUsers();
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
    ProfileReducer: state.ProfileReducerState,
    PopReducer: state.PopReducerState,
    FilterReducer: state.FilterReducer,
    FilterStateReducer: state.FilterStateReducer,
  };
};
export default connect(mapStateToProps, { showModal, popBgAction, fetchUsers, filterUsers })(GridView);
