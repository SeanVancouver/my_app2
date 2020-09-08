import React, { useContext } from "react";
import { usersA, filterA, showModalA } from "../../actions";
import { connect } from "react-redux";
import UserContext from "../../context/UserContext";

const GridView = (props) => {
  // const { userData, setUserData } = useContext(UserContext);

  // console.log("userData logreg " + JSON.stringify(userData));
  const modalClicked = (profileArr) => {
    props.showModalA(profileArr);
  };

  let profilesLoad = props.FilterR;

  const gridArray = () => {
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
                gender: eachProfile.gender,
                desc: eachProfile.desc,
              });
            }}
          ></img>
        </div>
      );
    });
  };
  return (
    <div className="view_container">
      <div className="grid_wrapper">{gridArray()}</div>
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
})(GridView);
