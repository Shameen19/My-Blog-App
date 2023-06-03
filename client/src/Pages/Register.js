import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:4008/register",
        {
          name,
          password,
        },
        config
      );

      console.log("Data i have recieved: " + data);
    } catch (err) {
      console.log("Error occured at register", err);
    }
  };

  return (
    <form className="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default Register;
