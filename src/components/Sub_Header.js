import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

const get_views = (display, title) => {
  if (display == title) {
    return (
      <div>
        <p>
          <a href="/grid">Grid</a>
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

const Sub_Header = ({ display, title }) => {
  const sub_item = () => {
    console.log(display + " " + title);
    switch (title) {
      case "Views":
        return get_views(display, title);
      case "Contacts":
        return get_contacts(display, title);
      case "Setting":
        return get_setting(display, title);
      default:
        return null;
    }
  };

  return <div className="sub_menu">{sub_item()}</div>;
};

export default Sub_Header;
