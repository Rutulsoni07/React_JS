import React, { useEffect, useState } from "react";

// OBJECT
export default function Crude1() {
  // State to handle form input fields (name, email, password)
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to store the array of user data, initialized from localStorage
  const [arr, setarr] = useState(() => {
    let storedData = localStorage.getItem("user_data");
    return storedData ? JSON.parse(storedData) : []; // If data exists, parse it; otherwise, start with an empty array
  });

  //   FORM TARGET:-
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    //After updating data in form the button value is change into Submit and the data will change
    if (editIndex === null) {
      setarr([...arr, input]); // Add the new input to the existing array
    } else {
      // If editing an existing entry, update that index in the array:-
      const updatedData = [...arr];
      updatedData[editIndex] = input; // Replace the existing entry with new data
      setarr(updatedData);

      //CLEAR INPUT FIELD:-
      setInput({
        name: "",
        email: "",
        password: "",
      });
      setEditIndex(null); //RESET EDIT STATE
    }

    setInput({
      name: "",
      email: "",
      password: "",
    });
  };
  // State to track which index is being edited
  const [editIndex, setEditIndex] = useState(null);

  //EDIT FUNCTION:-
  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(arr[index]);
  };

  //delete function:-
  const handleDelete = (index) => {
    // splice method:-
    // const updatedData = [...arr]
    // updatedData.splice(index, 1)
    // setarr(updatedData)

    // filter method:-
    const updateData = arr.filter((_, i) => i !== index);
    setarr(updateData);
  };

  //   SAVE DATA TO LOCALSTORAGE:-
  useEffect(() => {
    localStorage.setItem("user_data", JSON.stringify(arr));
  }, [arr]);
  /////////////////////////////////
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">
          {editIndex === null ? "Submit" : "Update"}
        </button>
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
            <th>Action</th>
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
                <button onClick={() => handleDelete(index)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
