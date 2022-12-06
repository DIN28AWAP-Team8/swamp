import React from "react";
import V8Chart from "./charts/V8";
import V9Chart from "./charts/V9";

function N2() {
  return (
    <div className="container">
      <div>
        <V8Chart />
      </div>
      <div>
        <V9Chart />
      </div>
    </div>
  );
}

export default N2;
