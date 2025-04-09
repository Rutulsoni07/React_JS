import React, { useEffect, useState } from "react";

export default function Crude2() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    gender: "",
  });

  const [file, setFile] = useState(null);

  const [ind, setind] = useState(null);

  const [item, setItem] = useState(() => {
    const storedata = localStorage.getItem("Data");
    return storedata ? JSON.parse(storedata) : [];
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();

    if (
      input.name &&
      input.email &&
      input.password &&
      input.country &&
      input.gender &&
      file
    ) {
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL);
      console.log(input);

      setItem([...item, { ...input, file: fileURL }]);
    } else {
      alert("Please Fill Input Field");
    }

    setInput({
      name: "",
      email: "",
      password: "",
      country: "",
      gender: "",
    });
    setFile(null);
    setind(null);
  };

  const handleDelete = (index) => {
    const updatedata = item.filter((_, i) => index !== i);
    setItem(updatedata);
  };

  const handleEdit = (index) => {
    setind(index);
    setInput(item[index]);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(item));
  }, [item]);

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          required
        />
        <br />
        <br />
        <input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <label htmlFor="">Country:</label>
        <select
          value={input.country}
          onChange={(e) => setInput({ ...input, country: e.target.value })}
        >
          <option value="">--select--</option>
          <option value="India">India</option>
          <option value="US">US</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="New Zeland">New Zeland</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Gender:</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={input.gender === "Female"}
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="Male"
          name="gender"
          value="Male"
          checked={input.gender === "Male"}
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="Male">Male</label>
        <input
          type="radio"
          id="Others"
          name="gender"
          value="Others"
          checked={input.gender === "Others"}
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="Others">Others</label>
        <br />
        <button type="submit">{ind === null ? "Submit" : "Update"}</button>
      </form>
      <br />
      <br />
      <table border={2} cellPadding={0}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>File</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.password}</td>
                <td>
                  <img src={ele.file} width="50%" alt="" />
                </td>
                <td>{ele.country}</td>
                <td>{ele.gender}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
