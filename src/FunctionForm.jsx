import React, { useState } from "react";

export default function FunctionForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const HandleForm = (e) => {
    e.preventDefault();

    // value will be show in console
    console.log(Name);
    console.log(Email);
    console.log(Password);

    //reset from field not using target.reset function
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Function Form</h1>
      <form onSubmit={HandleForm}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          //to apply  value in form
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
