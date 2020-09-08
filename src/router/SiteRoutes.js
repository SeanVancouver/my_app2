import React, { useState, useEffect, useRef, useContext } from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "../components/Views/GridView";
import DetailView from "../components/Views/DetailView";
import Register from "../components/Views/auth/Register";
import LogReg from "../components/Views/auth/LogReg";
import UserContext from "../context/UserContext";
import Header from "../components/shared/Header";
import MyModal from "../components/shared/Modal";
import SideBar from "../components/shared/SideBar";
import PrivateRoute from "../helpers/shared/PrivateRoute";
import history from "../history";
import { usersA } from "../actions";
import Axios from "axios";

const SiteRoutes = () => {
  // const { userData, setUserData } = useContext(UserContext);
  return (
    <div className="site_app">
      <div className="top_left_bloc">
        {/* <h3>{userData.user.displayName}</h3> */}
      </div>
      <div className="header_wrapper">
        <Header />
      </div>
      <div className="content_wrapper">
        <Switch>
          {/* <PrivateRoute path="/protected">
            <GridView />
          </PrivateRoute> */}
          <Route path="/view-grid" exact component={GridView} />
          <Route path="/view-detail" exact component={DetailView} />
        </Switch>
      </div>
      <div className="side_wrapper">
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default SiteRoutes;
