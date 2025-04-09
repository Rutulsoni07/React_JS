import React, { useContext } from "react";
import { data, data1 } from "./PropsDrilling";

export default function C3({Age}) {
  let name = useContext(data);
  let num = useContext(data1);
  return (
    <div>
      {/* props Drilling: */}
      <h1>Age:{Age}</h1>

      {/* USE  CONTEXT STYLE:- */}
      {/* <data.Consumer>
        //   function
        {(name) => {
          return (
            <>
              <h2>Name : {name}</h2>
            </>
          );
        }}
      </data.Consumer> */}

      {/* <data.Consumer>
        {(name) => {
          return (
            <>
              <data1.Consumer>
                {(arr) => {
                  return (
                    <>
                      <h2>Name : {name}</h2>

                      <ul>
                        {arr.map((ele, index) => (
                          <li key={index}>{ele}</li>
                        ))}
                      </ul>
                    </>
                  );
                }}
              </data1.Consumer>
            </>
          );
        }}
      </data.Consumer> */}

      <h2>Name : {name}</h2>

      <ul>
        {num.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}
