import React, { useState } from "react";

export default function Searching() {
  const people = [
    {
      name: "Alice Johnson",
      age: 28,
      city: "New York",
      occupation: "Software Engineer",
      salary: 95000,
    },
    {
      name: "Brian Smith",
      age: 34,
      city: "Chicago",
      occupation: "Marketing Manager",
      salary: 82000,
    },
    {
      name: "Catherine Lee",
      age: 25,
      city: "San Francisco",
      occupation: "UI/UX Designer",
      salary: 87000,
    },
    {
      name: "David Brown",
      age: 42,
      city: "Seattle",
      occupation: "Project Manager",
      salary: 105000,
    },
    {
      name: "Ella Davis",
      age: 30,
      city: "Austin",
      occupation: "Data Analyst",
      salary: 78000,
    },
    {
      name: "Frank Wilson",
      age: 38,
      city: "Denver",
      occupation: "HR Specialist",
      salary: 69000,
    },
    {
      name: "Grace Kim",
      age: 27,
      city: "Boston",
      occupation: "Product Manager",
      salary: 98000,
    },
    {
      name: "Henry Patel",
      age: 45,
      city: "Atlanta",
      occupation: "Accountant",
      salary: 76000,
    },
    {
      name: "Isla Thompson",
      age: 31,
      city: "Miami",
      occupation: "Sales Executive",
      salary: 72000,
    },
    {
      name: "Jack White",
      age: 36,
      city: "Los Angeles",
      occupation: "Creative Director",
      salary: 115000,
    },
  ];
  const [search, setsearch] = useState("");
  const [sort, setSort] = useState({
    key: "name",
    direction: "asc",
  });

  const data = people.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.age.toString().includes(search.toLowerCase()) || // to convert number into string
      e.city.toLowerCase().includes(search.toLowerCase()) ||
      e.occupation.toLowerCase().includes(search.toLowerCase()) ||
      e.salary.toString().includes(search.toLowerCase())
  );

  const handleSort = (key) => {
    let direction = "asc";
    if (sort.key === key && sort.direction === "asc") {
      direction = "desc";
    }
    setSort({ key, direction });
  };

  const sortedData = data.sort((a, b) => {
    if (a[sort.key] < b[sort.key]) {
      return sort.direction === "asc" ? 1 : -1;
    }

    if (a[sort.key] > b[sort.key]) {
      return sort.direction === "asc" ? -1 : 1;
    }
    return 0;
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Any Data"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <br />
      <br />
      <table border={3} cellPadding={10} cellSpacing={5}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>
              <button onClick={() => handleSort("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => handleSort("age")}>Age</button>
            </th>
            <th>
              <button onClick={() => handleSort("city")}>City</button>
            </th>
            <th>
              <button onClick={() => handleSort("occupation")}>
                Occupation
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("salary")}>Salary</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((ele, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.city}</td>
              <td>{ele.occupation}</td>
              <td>{ele.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
