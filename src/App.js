import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "./components/Views/GridView";
import DetailView from "./components/Views/DetailView";
import Header from "./shared/Header";
import ModalBg from "./shared/PopBg";
import Modal from "./shared/Modal";
import history from "./history";
import { fetchUsers } from "./actions";

const App = (props) => {
  // const closePopBG = () => {
  //   props.popBgAction(false);
  // };

  props.fetchUsers();
  // useEffect(() => {
  //   console.log("why continuous call?");
  //   props.fetchUsers();
  // }, []);

  return (
    <div className="my_app">
      <Router history={history}>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={GridView} />
          <Route path="/view-grid" exact component={GridView} />
          <Route path="/view-detail" exact component={DetailView} />
        </Switch>
      </Router>
      <ModalBg />
      <Modal />

      {/* <div
        id="popBG"
        className={`${props.PopReducer ? "show" : ""}`}
        onClick={() => closePopBG()}
      ></div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ProfileReducer: state.ProfileReducer };
};

export default connect(null, { fetchUsers })(App);
