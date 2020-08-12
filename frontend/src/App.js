import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard"));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
