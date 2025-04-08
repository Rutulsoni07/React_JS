import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrudeFile() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [file, setfile] = useState(null);

  const [arr, setarr] = useState(() => {
    let storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const navigate = useNavigate();

  // const [arr, setarr] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setfile(selectedFiles);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && email && pass && file) {
      const fileURL = file.map((file) => URL.createObjectURL(file));

      const updateData = [...arr, { name, email, pass, fileURL }];
      setarr(updateData);

      navigate("/DataShow1", { state: updateData });
    } else {
      alert("Enter Valid Data!");
    }
    setname("");
    setemail("");
    setpass("");
    setfile(null);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <br />
        <br />
        <input type="file" onChange={handleFileChange} multiple />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <hr />
    </div>
  );
}
