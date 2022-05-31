import React, { Component } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Backend from "./app/containers/Backend";
import Frontend from "./app/containers/Frontend";
import Auth from "./app/containers/Auth/Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/*<Router basename={'/tablets'}>*/}
            <Route path="/login" component={Auth} />

            <Route path="/" component={Backend} />
          {/*</Router>  */}
        </Switch>
      </div>
    );
  }
}

export default App;
