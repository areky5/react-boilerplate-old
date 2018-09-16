import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from '../component/dashboard/dashboard';

class ReactRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default ReactRouter;
