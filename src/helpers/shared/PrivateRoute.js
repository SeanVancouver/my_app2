import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Axios from "axios";

function PrivateRoute({ children, ...rest }) {
  let landingPath = useLocation();
  let userInfo = "";

  const checkLoggedIn = async () => {
    // >>>>>>> 1ST TO BE CALLED

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

      //   >>>>>>> LAST TO BE CALLED!
      console.log(">>>>>> " + userRes.data.user);
      let userInfo = userRes.data.user;
      //   return userRes.data.user;
    }
  };

  checkLoggedIn();

  //   if (!userInfo) {

  //     return <div>nothing</div>;

  //   }

  return (
    <Route
      {...rest}
      render={() =>
        "checkLoggedIn()" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: landingPath.pathname },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
