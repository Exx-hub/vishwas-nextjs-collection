import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();

  return data;
};

function DashboardSWR() {
  //   useSWR("dashboard", async () => {
  //     const response = await fetch("http://localhost:4000/dashboard");
  //     const data = await response.json();

  //     return data;
  //   });

  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <>
      <h2>Dashboard</h2>
      <h4>POSTS: {data.posts}</h4>
      <h4>LIKES: {data.likes}</h4>
      <h4>FOLLOWERS: {data.followers}</h4>
      <h4>FOLLOWING: {data.following}</h4>
    </>
  );
}

export default DashboardSWR;
