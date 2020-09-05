import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "./components/Views/GridView";
import DetailView from "./components/Views/DetailView";
import Header from "./components/shared/Header";
import ModalBg from "./components/shared/PopBg";
import MyModal from "./components/shared/Modal";
import SideBar from "./components/shared/SideBar";
import history from "./history";
import { usersA } from "./actions";

const App = (props) => {
  // const closePopBG = () => {
  //   props.popBgA(false);
  // };

  props.usersA(props.FilterStateR);
  // useEffect(() => {
  //   console.log("why continuous call?");
  //   props.usersA();
  // }, []);

  return (
    <div className="my_app">
      <Router history={history}>
        <div className="header_wrapper">
          <Header />
        </div>
        <div className="content_wrapper">
          <Switch>
            <Route path="/" exact component={GridView} />
            <Route path="/view-grid" exact component={GridView} />
            <Route path="/view-detail" exact component={DetailView} />
          </Switch>
        </div>
        <div className="side_wrapper">
          <SideBar></SideBar>
        </div>
      </Router>
      <ModalBg />
      <MyModal />

      {/* <div
        id="popBG"
        className={`${props.popBgR ? "show" : ""}`}
        onClick={() => closePopBG()}
      ></div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { FilterStateR: state.FilterStateR };
};

export default connect(mapStateToProps, { usersA })(App);
