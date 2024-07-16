import React from "react";

// Step 1: Create the Employees component
const Employees = () => {
  // Step 2: Data Setup - Define a list of employees
  const employees = [
    { name: "John Doe", position: "Manager", salary: 80000, status: "Active" },
    {
      name: "Jane Smith",
      position: "Developer",
      salary: 75000,
      status: "Active",
    },
    {
      name: "Alice Johnson",
      position: "Designer",
      salary: 70000,
      status: "Active",
    },
    {
      name: "Bob Brown",
      position: "Developer",
      salary: 72000,
      status: "Active",
    },
    {
      name: "Charlie Davis",
      position: "Manager",
      salary: 85000,
      status: "Active",
    },
    {
      name: "Diana Evans",
      position: "Designer",
      salary: 69000,
      status: "Active",
    },
    {
      name: "Ethan Foster",
      position: "Developer",
      salary: 73000,
      status: "Active",
    },
    {
      name: "Fiona Green",
      position: "Designer",
      salary: 68000,
      status: "Active",
    },
    {
      name: "George Harris",
      position: "Manager",
      salary: 0,
      status: "Not Active",
    },
    {
      name: "Hannah Irwin",
      position: "Developer",
      salary: 0,
      status: "Not Active",
    },
  ];

  // Step 4: Render the Employee component within a table
  return (
    <table border="1">
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} index={index + 1} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

// Step 3: Create the Employee component
const Employee = ({ index, employee }) => {
  // Destructure the employee object to get individual properties
  const { name, position, salary, status } = employee;

  // Render a table row with the employee details
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{status === "Active" ? salary : "N/A"}</td>{" "}
      {/* Show salary only if status is "Active" */}
      <td>{status}</td>
    </tr>
  );
};

export default Employees;
