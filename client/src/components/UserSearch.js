import React, { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function UserSearch({ users, onFilteredUsers }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);

    const filtered = text
      ? users.filter(user =>
          (user.first_name?.toLowerCase().includes(text) || false) ||
          (user.last_name?.toLowerCase().includes(text) || false) ||
          (user.username?.toLowerCase().includes(text) || false) ||
          (user.id?.toString().includes(text) || false)
        )
      : users;

    onFilteredUsers(filtered);
  };

  return (
    <div className="d-flex mb-4 align-items-center">
      <MdPersonSearch className="me-2" style={{ fontSize: "45px" }} />
      <input
        type="text"
        className="form-control"
        placeholder="Enter name/ID here"
        value={searchText}
        onChange={handleSearch}
      />
      <span>
        <FaSearch style={{ marginLeft: "10px" }} />
      </span>
    </div>
  );
}

export default UserSearch;
