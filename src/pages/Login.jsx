import React from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // const notify = ()=> toast.success("wowo so easy")
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, user } = UserAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
      toast.success("logged in successfully"),
        {
          className: "toast-message",
        };
    } catch (err) {
      toast.warn("Wrong Crededntials");
    }
  };

  return (
    <div className="login-page-container">
      <div className="flex-container">
        <div className="content-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="">Login</h2>
              <br />
              <br />
              <span className="subtitle">Email:</span>
              <br />
              <input
                type="email"
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
          Login
        </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
