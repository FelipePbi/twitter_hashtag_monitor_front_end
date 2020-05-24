import React from "react";
import { Switch, Route } from "react-router-dom";

import TwitterMonitor from "./screens/TwitterMonitor";
import ControlPainel from "./screens/ControlPainel";

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={TwitterMonitor} />
      <Route path='/control-panel' component={ControlPainel} />
    </Switch>
  );
}
