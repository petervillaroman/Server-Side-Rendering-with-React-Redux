/** @format */

import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the SUPER BEST home component</div>
      <button onClick={() => console.log("Hello There!")}>Press me!</button>
    </div>
  );
};

export default {
  component: Home
  
};
