import React from "react";
import V1V2Chart from "./charts/V1-V2";
import V3V4Chart from "./charts/V3-V4";
import V5Chart from "./charts/V5";
import V6Chart from "./charts/V6";
import V7Chart from "./charts/V7";

function N1() {
  return (
    <div className="container">
      <div>
        <V1V2Chart />
      </div>
      <div>
        <V3V4Chart />
      </div>
      <div>
        <V5Chart />
      </div>
      <div>
        <V6Chart />
      </div>
      <div>
        <V7Chart />
      </div>
   
    </div>
  );
}

export default N1;
