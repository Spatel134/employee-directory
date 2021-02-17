import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Table.css";

export default function Table({ employees, handleClick }) {
  const [filterQuery, setFilterQuery] = useState("");

  function handleInput(e) {
    const query = e.currentTarget.value.toLowerCase();
    setFilterQuery(query);
  }

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.name.first} ${employee.name.last}`.toLowerCase();
    return fullName.includes(filterQuery);
  });

  return (
    <>
      <SearchBar handleInput={handleInput} />
      <table className="w-100">
        <thead>
          <tr>
            <th>Image</th>
            <th
              data-dir={1}
              data-symbol="▼"
              onClick={(e) => {
                const direction = e.currentTarget.getAttribute("data-dir");
                e.currentTarget.setAttribute("data-dir", -direction);
                e.currentTarget.setAttribute("data-symbol", direction === "1" ? "▼" : "▲");
                handleClick("name", direction);
              }}
            >
              Name
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th
              data-dir={1}
              data-symbol="▼"
              onClick={(e) => {
                const direction = e.currentTarget.getAttribute("data-dir");
                e.currentTarget.setAttribute("data-dir", -direction);
                e.currentTarget.setAttribute("data-symbol", direction === "1" ? "▼" : "▲");
                handleClick("dob", direction);
              }}
            >
              DOB
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, i) => (
            <tr key={i}>
              <td>
                <img src={employee.picture.thumbnail} alt="Employee Picture." />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
