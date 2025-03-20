import React, { useEffect, useState } from "react";

export default function CrudeFile() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [file, setfile] = useState(null);

  const [arr, setarr] = useState(() => {
    let storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      setfile(image);
    }
  };

  const handleDelete = (index) => {
    const updateData = arr.filter((_, i) => i !== index);
    setarr(updateData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input.name && input.email && input.pass && file) {
      const fileURL = URL.createObjectURL(file);
      setarr([
        ...arr,
        {
          name: input.name,
          email: input.email,
          pass: input.pass,
          file: fileURL,
        },
      ]);
    } else {
      alert("Enter Valid Data!");
    }
    setInput({
      name: "",
      email: "",
      pass: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);
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
          value={input.pass}
          onChange={(e) => setInput({ ...input, pass: e.target.value })}
        />
        <br />
        <br />
        <input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <hr />
      {arr.length > 0 ? (
        <table border={2} cellPadding={0} width="100%">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((ele, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.pass}</td>
                    <td>
                      <img src={ele.file} alt="" />
                    </td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}
