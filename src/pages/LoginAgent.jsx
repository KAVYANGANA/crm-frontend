import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function LoginAgent() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Enter your details</p>

        {/* Email */}
        <label>Email</label>
        <input type="email" placeholder="Email Address" />

        {/* Password */}
        <label>Password</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>
        </div>

        {/* Sign In */}
        <button className="signin-btn">Sign in</button>

        {/* Forgot Password */}
        <p
          className="forgot"
          onClick={() => navigate("/forgot-password?role=agent")}
        >
          Forgot Password?
        </p>

        {/* Divider */}
        <p className="or">Or sign in with</p>

        {/* Buttons */}
        <div className="social-buttons">
          <button>Google</button>

          <button onClick={() => navigate("/admin-login")}>
            Admin Login
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginAgent;