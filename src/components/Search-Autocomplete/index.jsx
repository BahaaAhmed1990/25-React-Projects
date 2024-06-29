import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [filterdUsers, setFilteredUsers] = useState([]);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const usersResponse = await response.json();
      if (usersResponse && usersResponse.users && usersResponse.users.length) {
        setUsers(
          usersResponse.users.map((user) => user.firstName.toLowerCase())
        );
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
      setLoading(false);
    }
  }
  function handleChange(e) {
    const query = e.target.value;
    setSearchParam(query ? query.toLowerCase() : "");
    if (query.length > 0) {
      const filterd =
        users && users.length
          ? users.filter((user) => user.indexOf(query.toLowerCase()) > -1)
          : null;

      filterd.length > 0 ? setFilteredUsers(filterd) : null;
    } else {
      setFilteredUsers([]);
    }
  }
  function handleClick(event, user) {
    console.log(user);
    setFilteredUsers([user]);
    setSearchParam(user);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users, filterdUsers);
  return (
    <div className="autocomplete-container">
      <div className="auto-search">
        <input
          type="text"
          value={searchParam}
          name="auto-search"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {filterdUsers.length > 0 ? (
        <UsersList usersList={filterdUsers} onHandleClick={handleClick} />
      ) : null}
    </div>
  );
}

export default SearchAutocomplete;
