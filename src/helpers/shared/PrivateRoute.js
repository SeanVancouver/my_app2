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
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  let landingPath = useLocation();

  React.useEffect(() => {
    const checkLoggedIn = async () => {
      console.log("is checkLoggedIn called???");
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

        console.log("true here");
        setIsLoggedIn(true);
      } else {
        console.log("false here");
        setIsLoggedIn(false);
      }
    };
    checkLoggedIn();
  }, []);

  if (isLoggedIn === null) return null;

  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? (
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
