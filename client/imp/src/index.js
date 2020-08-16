
import React from "react";
import ReactDOM from "react-dom";
import { Router,BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css";
import "assets/demo/style.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Upload from "views/examples/Upload.js";
var hist = createBrowserHistory();
ReactDOM.render(

  <Router history={hist}>
    <Switch>
      <Route path="/haga" component={NucleoIcons} />


  
      <Route path="/" component={Index} />
      <Route path="/upload" component={Upload} />
    </Switch>
  </Router>,
  
  
  document.getElementById("root")
);
