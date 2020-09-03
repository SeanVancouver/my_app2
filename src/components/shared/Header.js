import React, { useState, useEffect } from "react";
import { popBgAction } from "../../actions";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Header = (props) => {
  const [visiView, setVisiView] = useState(false);
  const [visiContacts, setVisiContacts] = useState(false);
  const [visiSetting, setVisiSetting] = useState(false);

  const onTabClick = (tab) => {
    switch (tab) {
      case "Views":
        setVisiView(true);
        break;

      case "Contacts":
        setVisiContacts(true);
        break;

      case "Setting":
        setVisiSetting(true);
        break;

      default:
        break;
    }
    props.popBgAction(true);
  };

  // If everytime props.PopReducer changes to false, run this function.
  useEffect(() => {
    if (props.PopReducer == false) {
      setVisiView(false);
      setVisiContacts(false);
      setVisiSetting(false);
    }
  }, [props.PopReducer]);

  return (
    <div style={{ display: "flex" }}>
      <div className="header_item_w">
        <button onClick={() => onTabClick("Views")}>Views</button>
        {/* <SubHeader title="Views" display={visi} /> */}
        <div className="sub_menu">
          <div
            className={`subViews ${
              visiView && props.PopReducer ? "visible" : ""
            }`}
          >
            <p>
              <Link to="/view-grid">Grid</Link>
            </p>
            <p>
              <Link to="/view-detail">Detail</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="header_item_w">
        <button onClick={() => onTabClick("Contacts")}>Contacts</button>
        {/* <SubHeader title="Contacts" display={visi} /> */}
        <div className="sub_menu">
          <div
            className={`subContacts ${
              visiContacts && props.PopReducer ? "visible" : ""
            }`}
          >
            <p>
              <Link to="/chat">Chat</Link>
            </p>
            <p>
              <Link to="/groups">Groups</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="header_item_w">
        <button onClick={() => onTabClick("Setting")}>Setting</button>
        {/* <SubHeader title="Setting" display={visi} /> */}
        <div className="sub_menu">
          <div
            className={`subSetting ${
              visiSetting && props.PopReducer ? "visible" : ""
            }`}
          >
            <p>
              <Link to="/profile">Profile</Link>
            </p>
            <p>
              <Link to="/account">My account</Link>
            </p>
            <p>
              <Link to="/logout">Logout</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    PopReducer: state.PopReducerState,
  };
};
export default connect(mapStateToProps, { popBgAction })(Header);
