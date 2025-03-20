import React, { useEffect, useState } from "react";

export default function Comment() {
  // comment function
  const [input, setInput] = useState({
    comment: "",
  });

  //   pass in arr to store in localstorage
  const [arr, setarr] = useState(() => {
    let storedata = localStorage.getItem("comments");
    return storedata ? JSON.parse(storedata) : [];
  });

  //   form event:-
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);

    const updateArr = [...arr, input.comment];
    setarr(updateArr);

    if (editIndex === null) {
      setarr([...arr, input]);
    } else {
      const updatedata = [...arr];
      updatedata[editIndex] = input;
      setarr(updatedata);
      setEditIndex(null);
    }

    setInput({
      comment: "",
    });
  };

  // State to track which index is being edited
  const [editIndex, setEditIndex] = useState(null);

  //   Edit Function:-
  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(arr[index]);
  };

  // DeleteFunction:-
  const handleDelete = (index) => {
    const updatedata = arr.filter((_, i) => i !== index);
    setarr(updatedata);
  };

  //   store in localstorage when arr change    :-
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(arr));
  }, [arr]);
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <h1>Comments:-</h1>
        <input
          type="text"
          placeholder="Add a Comment.."
          value={input.comment}
          onChange={(e) => setInput({ ...input, comment: e.target.value })}
          required
        />
        <br />
        <br />

        <button type="submit" className="submit">
          {editIndex === null ? "Comment" : "Update"}
        </button>
        {/* <button >Cancel</button> */}
      </form>
      <br />
      <br />
      <br />
      <div className="container">
        <h2>Comments:</h2>
        {arr.map((comment1, index) => (
          <p key={index} className="para">
            {index + 1} {comment1.comment} <br />
            <button className="Edit" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="Delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}
