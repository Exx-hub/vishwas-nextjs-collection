import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  console.log(dashboardData);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    }

    const timeout = setTimeout(() => {
      fetchDashboardData();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <h2>Dashboard</h2>
      <h4>POSTS: {dashboardData.posts}</h4>
      <h4>LIKES: {dashboardData.likes}</h4>
      <h4>FOLLOWERS: {dashboardData.followers}</h4>
      <h4>FOLLOWING: {dashboardData.following}</h4>
    </>
  );
}

export default Dashboard;
