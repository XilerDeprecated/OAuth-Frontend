import { Redirect, Route, Router, Switch } from "react-router-dom";

import { AuthorizePage } from "./pages";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout.comp";
import React from "react";
import { SignInRedirector } from "./components/SignInRedirector/SignInRedirector.comp";
import { history } from "./utils/history";

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
          path="/oauth/:organisation/:id/:redirect"
          render={() =>
            getComponentWithLayout(
              AuthorizePage,
              "Authorize access to your account"
            )
          }
        />
        <Route
          exact
          path="/oauth/signin/:organisation/:id/:redirect"
          component={SignInRedirector}
        />
        <Route
          exact
          path="/oauth/account"
          render={() => (window.location.href = "http://accounts.xiler.net")}
        />
        <Redirect to="/oauth/account" />
      </Switch>
    </Router>
  );
};

export default App;
