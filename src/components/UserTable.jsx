import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserTable.css";

const UserTable = ({ users }) => {
  const navigate = useNavigate();

  const handleUserClick = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Rasm</th>
          <th>Ism</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => handleUserClick(user.id)}>
            <td>
              <img src={user.avatar} alt={user.first_name} />
            </td>
            <td>
              {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
