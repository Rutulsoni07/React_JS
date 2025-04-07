import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BSHome() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const [arr, setarr] = useState(() => {
    const updatedata = localStorage.getItem("data");
    return updatedata ? JSON.parse(updatedata) : [];
  });

  //   const [arr, setarr] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedata = [...arr, { name, email, pass }];
    setarr(updatedata);
    navigate("/BootstrapAboutUs", { state: updatedata });
    setname("");
    setemail("");
    setpass("");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);
  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
