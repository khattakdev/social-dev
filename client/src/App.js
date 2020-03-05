import React from "react";
import Home from "./Container/Home";
import Profile from "./Components/Profile";
import Timeline from "./Container/Timeline";
import Profiles from "./Components/Profile/Body/Timeline/profiles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <Home /> */}
        {/* <Nav />
      <Top /> */}
        <Switch>
          <Route path="/profiles" component={Profiles} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
