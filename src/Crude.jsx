import React, { useEffect, useState } from "react";

export default function Crude() {
  // object state
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   array state
  const [arr, setArr] = useState(() => {
    let storedData = localStorage.getItem("User_Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  //   edit state
  const [editIndex, setEditIndex] = useState(null);

  //   form submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setArr([...arr, inputValue]);
    setInputValue({
      name: "",
      email: "",
      password: "",
    });
  };

  //   delete function
  const handleDelete = (index) => {
    const updatedData = [...arr];
    updatedData.splice(index, 1);
    setArr(updatedData);
    // console.log(index);
    // console.log(updatedData);
  };

  //   edit function
  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(arr[index]);
  };

  console.log(editIndex);

  //   localstorage
  useEffect(() => {
    localStorage.setItem("User_Data", JSON.stringify(arr));
  }, [arr]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email ID"
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          required
        />
        <br />
        <br />

        {/* {editIndex === null ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Update</button>
        )} */}

        <button type="submit">
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>
      <hr />
      <hr />

      <table border={2} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
