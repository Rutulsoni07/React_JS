import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function DataShow1() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData =
    location.state || JSON.parse(localStorage.getItem("data")) || [];
  const [data, setdata] = useState(initialData);

  const [editIndex, seteditIndex] = useState(null);
  const [editname, seteditname] = useState("");
  const [editemail, seteditemail] = useState("");
  const [editpass, seteditpass] = useState("");
  const [editfile, seteditfile] = useState(null);

  const handleDelete = (index) => {
    const updateData = data.filter((_, i) => i !== index);
    setdata(updateData);
    navigate("/CrudeFile", { state: updateData });
  };
  const handleEdit = (index) => {
    seteditIndex(index);

    seteditname(data[index].name);
    seteditemail(data[index].email);
    seteditpass(data[index].pass);
  };

  const handleEditFileChange = (e) => {
    const selectedEditFiles = Array.from(e.target.files);
    if (selectedEditFiles.length > 0) {
      seteditfile(selectedEditFiles);
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const fileEditURL = editfile.map((file) => URL.createObjectURL(file));

    const updatedData = data.map((ele, i) =>
      i === editIndex
        ? {
            name: editname,
            email: editemail,
            pass: editpass,
            fileEditURL: fileEditURL,
          }
        : ele
    );

    setdata(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    navigate("/DataShow1", { state: updatedData });

    seteditname("");
    seteditemail("");
    seteditpass("");
    seteditfile(null);
    seteditIndex(null);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <h1>Edit Form</h1>
      {data.length > 0 ? (
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
            {data.map((ele, index) => {
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.pass}</td>
                <td>
                  {ele.fileEditURL.map((file, i) => (
                    <img src="{file}" alt="" key={i} width="65%" />
                  ))}
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      ) : (
        "No Data"
      )}
      <br />
      <br />

      {editIndex !== null ? (
        <>
          <form onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              placeholder="Enter Edit Name"
              value={editname}
              onChange={(e) => seteditname(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              value={editemail}
              onChange={(e) => seteditemail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              value={editpass}
              onChange={(e) => seteditpass(e.target.value)}
            />
            <br />
            <br />
            <input type="file" onChange={handleEditFileChange} multiple />
            <br />
            <br />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        ""
      )}
      <h2>
        <Link to="/CrudeFile">Form</Link>
      </h2>
    </div>
  );
}
