import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/UserDetailPage.css";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div className="user-detail">
      <img src={user.avatar} alt={user.first_name} />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailPage;
