import React, { useState, useEffect } from "react";
import { popBgAction } from "../actions";
import SubHeader from "./SubHeader";
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
          <div className={`subViews ${(visiView && props.PopReducer) ? "visible" : ""}`}>
            <p>
              <a href="/">Grid</a>
            </p>
            <p>
              <a href="/detail">Detail</a>
            </p>
          </div>
        </div>
      </div>

      <div className="header_item_w">
        <button onClick={() => onTabClick("Contacts")}>Contacts</button>
        {/* <SubHeader title="Contacts" display={visi} /> */}
        <div className="sub_menu">
          <div className={`subContacts ${(visiContacts && props.PopReducer) ? "visible" : ""}`}>
            <p>
              <a href="/chat">Chat</a>
            </p>
            <p>
              <a href="/groups">Groups</a>
            </p>
          </div>
        </div>
      </div>

      <div className="header_item_w">
        <button onClick={() => onTabClick("Setting")}>Setting</button>
        {/* <SubHeader title="Setting" display={visi} /> */}
        <div className="sub_menu">
          <div className={`subSetting ${(visiSetting && props.PopReducer) ? "visible" : ""}`}>
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
