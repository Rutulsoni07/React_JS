import React from "react";

export default function PropPractice(props) {
  return (
    <div>
      <h1>PropPactice</h1>
      <table border={2} cellPadding={0} width="100%">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.users1.map((ele, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
