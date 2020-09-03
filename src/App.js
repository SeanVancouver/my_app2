import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "./components/GridView";
import DetailView from "./components/DetailView";
import Header from "./components/Header";
import ModalBg from "./components/ModalBg";
import Modal from "./reusable/modal";
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
          <Route path="/detail" exact component={DetailView} />
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

export default connect(mapStateToProps, { fetchUsers })(App);
