import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact component={SecondComponent} path="/secondComponent" />
          <Route exact component={FirstComponent} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
