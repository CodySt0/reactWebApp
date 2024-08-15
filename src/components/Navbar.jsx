import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [cityInput, setCityInput] = useState("");
  const navigate = useNavigate();
}

const handleSearch = (e) => {
  e.preventDefault();
  if (cityInput.trim()) {
    navigate("/city/${cityInput}");
    setCityInput("");
  }
};

return (
  <nav>
    <ul>
      <li>
        {" "}
        <Link to="/city/Los Angeles"> Los Angeles </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/city/Boston"> Boston </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/city/New York"> New York </Link>{" "}
      </li>
    </ul>
    <form onSubmit={handleSearch} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Enter a city name"
      />
    </form>
  </nav>
);

export default NavBar;
