import React from "react";

const Login = () => {
  return (
    <form className="Login">
      <h1>Login</h1>
      <input type="text" placeholder="Enter your name" />
      <input type="password" placeholder="Enter your Password" />
      <button>Login</button>
    </form>
  );
};

export default Login;
