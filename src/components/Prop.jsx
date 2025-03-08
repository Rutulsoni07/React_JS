import React from "react";

export default function Prop(props) {
  /* props - properties (object) */

  /* one way data binding */

  /* pass data from parent to child component */

  /* datatype- array,string,null,object,undefined,boolean,number */

  return (
    <>
      <h2>{props.name1}</h2>
      <h2>{props.age1}</h2>
      <hr />
      {props.arr1.map((ele, ind) => (
        <li key={ind}>{ele}</li>
      ))}
      <hr />
      {props.obj1.name} <br />
      {props.obj1.age} <br />
      {props.obj1.city}
      <hr />
      {props.arrobj1[0].name}
      {props.arrobj1[1].age}
      {props.arrobj1[2].city}
      <hr />
      <table border={1} cellPadding={0} width="100%">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {props.arrobj1.map((ele, ind) => (
            <tr>
              <td>{ind + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <hr />
     
    </>
  );
}
