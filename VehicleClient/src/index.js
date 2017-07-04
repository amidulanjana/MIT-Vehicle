import React, { Component } from "react";
import ReactDom from "react-dom";
import Request from "superagent";
import _ from "lodash";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import App from "./components/app";

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<Index />, document.getElementById("root"));
