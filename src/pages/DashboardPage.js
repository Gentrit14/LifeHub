// src/pages/DashboardPage.js
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
        } else {
          setMessage(data.message || "Unauthorized");
        }
      } catch (error) {
        setMessage("Error fetching dashboard");
      }

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      {loading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
};

export default DashboardPage;
