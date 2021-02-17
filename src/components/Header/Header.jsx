import React from "react";
import "./Header.css"

const Header = () => {
  return <div>
          <header className="text-center py-1">
        <h1>Employee Directory</h1>
        <p>Click on Name or DOB to sort by column or use the search box to filter by first or last name.</p>
      </header>         
  </div>;
};

export default Header;
