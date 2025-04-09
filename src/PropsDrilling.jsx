import React, { createContext } from "react";
import C1 from "./C1";

const data = createContext();
const data1 = createContext();

function PropsDrilling() {
  const name = "Rutul";
  const Age = [25];
  const num = [1, 33, 4, 5, 6, 75, 4];

  return (
    <div>
      {/* props drilling */}
      <h1>Props Drilling</h1>

      {/* <C1 Age={Age} /> */}
      {/* contextAPI - data,provider,consumer */}

      {/* usecontext() */}

      <data.Provider value={name}>
        <data1.Provider value={num}>
          <C1 Age={Age} />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export default PropsDrilling;
export { data, data1 };
