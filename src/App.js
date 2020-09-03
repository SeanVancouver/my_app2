import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "./components/Views/GridView";
import DetailView from "./components/Views/DetailView";
import Header from "./components/shared/Header";
import ModalBg from "./components/shared/PopBg";
import Modal from "./components/shared/Modal";
import history from "./history";
import { usersA } from "./actions";

const App = (props) => {
  // const closePopBG = () => {
  //   props.popBgAction(false);
  // };

  props.usersA();
  // useEffect(() => {
  //   console.log("why continuous call?");
  //   props.usersA();
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
  return { usersR: state.usersR };
};

export default connect(null, { usersA })(App);
