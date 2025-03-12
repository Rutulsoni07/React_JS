import React, { useState } from "react";
export default function Spreading1() {
  //The  spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
  const [Obj, SetOBjData] = useState({
    name: "Allen",
    age: "23",
    city: "Wellington",
  });
  return (
    <div>
      <h1>Obj Form & Spreading data</h1>
      <h2>Name:{Obj.name}</h2>
      <h2>Age:{Obj.age}</h2>
      <h2>City:{Obj.city}</h2>
      <button onClick={() => SetOBjData({ ...Obj, name: "Rutul" })}>
        Change name
      </button>
      <button onClick={() => SetOBjData({ ...Obj, age: "25" })}>
        Change Age
      </button>
      <button onClick={() => SetOBjData({ ...Obj, city: "Ahmedabad" })}>
        Change City
      </button>
      <br /> <br />
      <button
        onClick={() =>
          SetOBjData({
            ...Obj,
            name: "Rutul",
            age: "25",
            city: "Ahmedabad",
          })
        }
      >
        Change ALL Data
      </button>
    </div>
  );
}
