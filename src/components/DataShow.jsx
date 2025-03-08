import React from "react";

export default function DataShow() {
  const name = "Alice";

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const students = [
    {
      id: 1,
      name: "Alice",
      std: 6,
      rollno: 101,
      school: "Sunshine Elementary",
    },
    {
      id: 2,
      name: "Bob Johnson",
      std: 7,
      rollno: 112,
      school: "Hilltop Middle School",
    },
    {
      id: 3,
      name: "Charlie",
      std: 5,
      rollno: 11,
      school: "Riverside High",
    },
    {
      id: 4,
      name: "Diana",
      std: 8,
      rollno: 21,
      school: "Sunshine Elementary",
    },
    {
      id: 5,
      name: "Ethan",
      std: 5,
      rollno: 18,
      school: "Hilltop Middle School",
    },
  ];
  //   console.log(students);

  let obj = {
    company: "TechnoSolutions",
    location: "Ahmedabad",
    staff: 50,
    vacancy: "Frontend Developer",
  };
  return (
    <div>
      {/* print Single variable name in {} then get output */}
      {name}
      <br />
      <hr />
      {/* Second Data Printed in Array Format:- */}
      <ul>
        {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
      <hr />
      <br /> <br />
      {/*Third printed data in Array of Object Format:- */}
      <table border={1} cellPadding={0} width="100%">
        <thead>
          <tr>
            <th>Sr no </th>
            <th>Student Name</th>
            <th>Standard </th>
            <th>Roll No. </th>
            <th>School </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.std}</td>
              <td>{student.rollno}</td>
              <td>{student.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <br />
      {/* Last data Print Object Format:- */}
      <h2>{obj.company}</h2>
      <h2>{obj.location}</h2>
      <h2>{obj.staff}</h2>
      <h2>{obj.vacancy}</h2>
    </div>
  );
}
