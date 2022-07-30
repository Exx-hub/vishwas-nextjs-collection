import User from "../components/user";

function UserList({ users }) {
  // console.log(props);
  // console.log(users);

  // const { users } = props;
  return (
    <>
      <h1>List of users</h1>

      {users.map((user) => (
        <div key={user.id} style={{ borderTop: "1px solid lightgray" }}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // console.log(data);

  return {
    props: { users: data },
  };
}
