import React, { lazy } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout.comp";
import { SignInRedirector } from "./components/SignInRedirector/SignInRedirector.comp";
import { history } from "./utils/history";

const AuthorizePage = lazy(() => import("./pages/index"));

const getComponentWithLayout = (
  Component: React.FC,
  title: string,
  after: boolean = true
) => {
  return (
    <DefaultLayout title={title} after={after}>
      <Component />
    </DefaultLayout>
  );
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/:lang?/:organisation/:app/:redirect"
          render={() =>
            getComponentWithLayout(
              AuthorizePage,
              "Authorize access to your account"
            )
          }
        />
        <Route
          exact
          path="/signin/:organisation/:id/:redirect"
          component={SignInRedirector}
        />
        <Route
          exact
          path="/account"
          render={() => (window.location.href = "http://accounts.xiler.net")}
        />
        <Redirect to="/account" />
      </Switch>
    </Router>
  );
};

export default App;
