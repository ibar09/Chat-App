import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./loginPage.css";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(routes.login, { email, password });
      const token = response.data.token;
      if (token) {
        const payload = jwtDecode(token);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(payload));
        navigate("/chat");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center title">
          <span>Cool</span> Chat App
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        {error && <p className="text-danger text-center mt-3">{error}</p>}

        <div className="text-center mt-3">
          <small>
            Don't have an account? <a className="text-primary">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
