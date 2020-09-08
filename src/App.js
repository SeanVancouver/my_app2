import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Directory from "./components/Views/Directory";
import Register from "./components/Views/auth/Register";
import LogReg from "./components/Views/auth/LogReg";
import { UserCProvider } from "./context/UserContext";
import Header from "./components/shared/Header";
import MyModal from "./components/shared/Modal";
import SideBar from "./components/shared/SideBar";
import history from "./history";
import { usersA } from "./actions";
import Axios from "axios";
import SiteRoutes from "./router/SiteRoutes";
import PrivateRoute from "./helpers/shared/PrivateRoute";

const App = (props) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  props.usersA(props.FilterStateR);

  // useEffect(() => {
  const checkLoggedIn = () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = Axios.post(
      "http://localhost:5000/users/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes.data) {
      console.log("when is await called? ");
      const userRes = Axios.get("http://localhost:5000/users/", {
        headers: { "x-auth-token": token },
      });

      console.log("when do you get called?");

      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  checkLoggedIn();
  // }, []);

  return (
    <div className="">
      <Router history={history}>
        <UserCProvider>
          {/* <UserCProvider value={[userData, setUserData]}> */}

          <Switch>
            <Route path="/" exact component={Directory} />
            <Route
              path="/login"
              exact
              render={(props) => <LogReg {...props} />}
            />
            <Route path="/register" exact component={Register} />
            {/* <SiteRoutes /> */}
            <PrivateRoute usereD={userData}>
              <SiteRoutes />
            </PrivateRoute>
          </Switch>
        </UserCProvider>
      </Router>
      <MyModal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { FilterStateR: state.FilterStateR };
};

export default connect(mapStateToProps, { usersA })(App);

// export default App;
