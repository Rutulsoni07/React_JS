import React, { useState } from "react";

export default function Spreading() {
  //The  spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
  // const myVehicle = {
  //   brand: 'Ford',
  //   model: 'Mustang',
  //   color: 'red'
  // }

  // const updateMyVehicle = {
  //   type: 'car',
  //   year: 2021,
  //   color: 'yellow'
  // }

  // const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  
  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
  });
  const HandleForm = (e) => {
    e.preventDefault();
    console.log(obj);

    setObj({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={HandleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={obj.name}
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          value={obj.email}
          onChange={(e) => setObj({ ...obj, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={obj.password}
          onChange={(e) => setObj({ ...obj, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
