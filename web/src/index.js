/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import LandingPage from "views/LandingPage.js";
import ImgClassifier from "components/Pages/ImageCls";
import TextClassifier from "components/Pages/TextCls"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        render={(props) => <LandingPage {...props} />}
        // render={(props) => <Index {...props} />} 
      />
      <Route 
        path="/classify/image" 
        render={(props) => <ImgClassifier {...props} />}
      />

      <Route 
        path="/classify/text" 
        render={(props) => <TextClassifier {...props} />}
        // render={(props) => <Index {...props} />} 
      />
      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
