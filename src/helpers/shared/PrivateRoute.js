import React, { useContext } from "react";
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

function PrivateRoute({ usereD, children, ...rest }) {
  const { userData } = useContext(UserContext);

  let landingPath = useLocation();

  console.log("called only when needed ? ");
  debugger;

  if (!usereD) {
    return <div>nothing</div>;
  }

  return (
    <Route
      {...rest}
      render={() =>
        usereD.user ? (
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
