import React from "react";
import Prop from "./Prop";
export default function Prop1() {
  /* props - properties (object) */

  /* one way data binding */

  /* pass data from parent to child component */

  /* datatype- array,string,null,object,undefined,boolean,number */

  let name = "ABC";
  let age = 12;

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let obj = {
    name: "ABC",
    age: 14,
    city: "Sydney",
  };

  let arrobj = [
    { name: "ABC", age: 14, city: "Sydney" },
    { name: "FC", age: 19, city: "Adelaide" },
    { name: "RT", age: 24, city: "Melbourne" },
  ];

  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Emma", age: 22 },
    { id: 6, name: "Frank", age: 27 },
    { id: 7, name: "Grace", age: 32 },
    { id: 8, name: "Hank", age: 29 },
    { id: 9, name: "Ivy", age: 26 },
    { id: 10, name: "Jack", age: 31 },
    { id: 11, name: "Karen", age: 28 },
    { id: 12, name: "Leo", age: 33 },
    { id: 13, name: "Mia", age: 24 },
    { id: 14, name: "Nathan", age: 36 },
    { id: 15, name: "Olivia", age: 23 },
  ];
  console.log(users);
  return (
    <div>
      <Prop
        name1={name}
        age1={age}
        arr1={arr}
        obj1={obj}
        arrobj1={arrobj}
        users1={users}
      />
    </div>
  );
}
