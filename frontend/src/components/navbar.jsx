import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
