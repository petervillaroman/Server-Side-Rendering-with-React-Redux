/** @format */

import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Sample from "./components/SampleRoute";
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />

      <Route exact path="/Sample" component={Sample} />
    </div>
  );
};
