import { Link } from "react-router";
import { useAuth } from "../utils/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {user ? user.username : "Guest"}</h1>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <Link to="/dashboard">Go to Dashboard</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
