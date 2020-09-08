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
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });
  props.usersA(props.FilterStateR);

  // useEffect(() => {

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
            <PrivateRoute>
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
