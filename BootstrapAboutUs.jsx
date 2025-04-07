import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function BootstrapAboutUs() {
  const location = useLocation();
  const navigate = useNavigate();
  const intialData = location.state;

  const [data, setdata] = useState(intialData);
  const [editIndex, seteditIndex] = useState(null);
  const [editname, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editpass, setEditPass] = useState("");

  const handleDeleteForm = (ind) => {
    const updateData = data.filter((_, i) => i !== ind);
    setdata(updateData);
    navigate("/BootstrapAboutUS", { state: updateData });
  };

  const handleEditForm = (ind) => {
    seteditIndex(ind);
    setEditName(data[ind].name);
    setEditEmail(data[ind].email);
    setEditPass(data[ind].pass);
  };
  const HandleFormEdit = (e) => {
    e.preventDefault();

    const updatedata = data.map((ele, ind) =>
      ind === editIndex
        ? { name: editname, email: editEmail, pass: editpass }
        : ele
    );
    navigate("/BootstrapAboutUs", { state: updatedata });
    setdata(updatedata);
    setEditName("");
    setEditEmail("");
    setEditPass("");
    seteditIndex(null);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <br />
      <br />
      {data.length > 0 ? (
        <>
          <table border={3} cellPadding={5} cellSpacing={5}>
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
              {data.map((ele, ind) => (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.pass}</td>
                  <td>
                    <button onClick={() => handleEditForm(ind)}>Edit</button>{" "}
                    <button onClick={() => handleDeleteForm(ind)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
      <br />
      <br />
      <br />
      <br />
      {editIndex !== null ? (
        <>
          <form onSubmit={HandleFormEdit}>
            <input
              type="text"
              placeholder="Enter Edit Name"
              value={editname}
              onChange={(e) => setEditName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Edit Email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Edit Password"
              value={editpass}
              onChange={(e) => setEditPass(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
