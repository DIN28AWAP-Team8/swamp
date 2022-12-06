import React from "react";
import V1V2Chart from "./charts/V1-V2";
import V3V4V10Chart from "./charts/V3-V4-V10";
import V5Chart from "./charts/V5";
import V6Chart from "./charts/V6";
import V7V10Chart from "./charts/V7-V10";

function N1() {
  return (
    <div className="container">
      <div>
        <V1V2Chart />
      </div>
      <div>
        <V3V4V10Chart />
      </div>
      <div>
        <V5Chart />
      </div>
      <div>
        <V6Chart />
      </div>
      <div>
        <V7V10Chart />
      </div>
   
    </div>
  );
}

export default N1;
