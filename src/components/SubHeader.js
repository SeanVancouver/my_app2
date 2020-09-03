import React from "react";
import { popBgAction } from "../actions";
import { connect } from "react-redux";

const get_views = (display, title) => {
  if (display == title) {
    return (
      <div>
        <p>
          <a href="/">Grid</a>
        </p>
        <p>
          <a href="/detail">Detail</a>
        </p>
      </div>
    );
  }
};
const get_contacts = (display, title) => {
  if (display == title) {
    return (
      <div>
        <p>
          <a href="/chat">Chat</a>
        </p>
        <p>
          <a href="/groups">Groups</a>
        </p>
      </div>
    );
  }
};
const get_setting = (display, title) => {
  if (display == title) {
    return (
      <div>
        <p>
          <a href="/profile">Profile</a>
        </p>
        <p>
          <a href="/account">My account</a>
        </p>
        <p>
          <a href="/logout">Logout</a>
        </p>
      </div>
    );
  }
};

// const SubHeader = ( { display, title }) => {

const SubHeader = (props) => {
  const sub_item = () => {
    switch (props.title) {
      case "Views":
        console.log(props.display + " " + props.title);
        return get_views(props.display, props.title);
      case "Contacts":
        return get_contacts(props.display, props.title);
      case "Setting":
        return get_setting(props.display, props.title);
      default:
        return null;
    }
  };

  return (
    <div className={`sub_menu ${props.PopReducer ? "" : "hidepop"}`}>
      {sub_item()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { PopReducer: state.PopReducerState };
};

export default connect(mapStateToProps, null)(SubHeader);

// export default SubHeader;
