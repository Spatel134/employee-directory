import { useState, useEffect } from "react";import Header from "./components/Header/Header"
// import SearchBar from "./components/SearchBar/SearchBar"
import Table from "./components/Table/Table"


function App() {
  const [employees, setEmployees] = useState([]);

  function handleClick(sortKey, direction) {
    setEmployees((currentEmployees) => {
      const toSort = [...currentEmployees];
      if (sortKey === "name") {
        toSort.sort((first, second) => {
          // direction reverses the sort depending on if it's 1 or -1.
          return first.name.first.localeCompare(second.name.first) * direction;
        });
      } else if (sortKey === "dob") {
        toSort.sort((first, second) => {
          if (first.dob.date < second.dob.date) {
            return -direction;
          } else if (first.dob.date > second.dob.date) {
            return direction;
          } else {
            return 0;
          }
        });
      }
      return toSort;
    });
  }

  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=25");
        const data = await response.json();
        setEmployees(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getEmployees();
  }, []);

  return (
    <div className="text-center">
      <Header/>
      <div className="container">
        <Table employees={employees} handleClick={handleClick} />
        {/* <SearchBar/> */}
      </div>
    </div>
  );
}

export default App;


