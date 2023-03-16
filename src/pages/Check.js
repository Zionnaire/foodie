import Side from "../components/Side";
import Dashboard from "../components/Dash";
import Checkout from "../components/Checkout";
import React from "react";

export default function Check() {
  return (
    <div id="vend-gen">
      <Side />
      <div id="vend-sub" >
        <Dashboard />
        <Checkout />
      </div>
    </div>
  );
}
