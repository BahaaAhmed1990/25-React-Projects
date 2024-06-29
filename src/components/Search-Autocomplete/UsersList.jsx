import React from "react";

function UsersList({ usersList, onHandleClick }) {
  return (
    <ul>
      {usersList.map((user, index) => (
        <li key={index} onClick={(event) => onHandleClick(event, user)}>
          {user}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
