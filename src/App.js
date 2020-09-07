import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GridView from "./components/Views/GridView";
import DetailView from "./components/Views/DetailView";
import Register from "./components/Views/auth/Register";
import LogReg from "./components/Views/auth/LogReg";
import UserContext from "./context/UserContext";
import Header from "./components/shared/Header";
import ModalBg from "./components/shared/PopBg";
import MyModal from "./components/shared/Modal";
import SideBar from "./components/shared/SideBar";
import history from "./history";
import { usersA } from "./actions";
import Axios from "axios";

const App = (props) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  props.usersA(props.FilterStateR);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="my_app">
      <Router history={history}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <div className="top_left_bloc">
            <h3>{}</h3>
          </div>
          <div className="header_wrapper">
            <Header />
          </div>
          <div className="content_wrapper">
            <Switch>
              <Route path="/" exact component={LogReg} />
              <Route path="/register" exact component={Register} />
              <Route path="/view-grid" exact component={GridView} />
              <Route path="/view-detail" exact component={DetailView} />
            </Switch>
          </div>
          <div className="side_wrapper">
            <SideBar></SideBar>
          </div>
        </UserContext.Provider>
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
