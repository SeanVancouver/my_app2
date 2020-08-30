import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import LandingPg from './components/LandingPg';
import Header from "./components/Header";
import history from "./history";

const App = () => {
  return (
    <div className="my_app">
      <Router history={history}>
        <div>
          <Header />
        </div>
      </Router>
    </div>
  );
};

export default App;
