import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "../components/UserTable";
import "../styles/HomePage.css";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="homepage">
      <h1>Foydalanuvchilar Ro'yxati</h1>
      <UserTable users={users} />
    </div>
  );
};

export default HomePage;
