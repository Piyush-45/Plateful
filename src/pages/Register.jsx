import React from "react";
import { useState } from "react";
import { app } from "../context/Firebase";
// import { app } from "../context/Firebase";
import { getAuth } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { db } from "../../context/Firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (email === "" || password === "") {
        toast.warn("Email or Password cannot be empty");
      } else {
        await signUp(email, password);
        navigate("/");
        toast.success("Account created successfully");
      }
    } catch (err) {
      toast.warn(err)
    }
    //   console.log(email)
  };

  return (
    <div className="login-page-container">
    <div className="flex-container">
      <div className="content-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="">Register</h2>
            <br />
            <br />
            <span className="subtitle">Email:</span>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <span className="subtitle">PASSWORD:</span>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
        Register
      </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
