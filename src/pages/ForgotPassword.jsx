import React from "react";
import AuthLayout from "../components/AuthLayout";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/auth.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  // get role from URL
  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  return (
    <AuthLayout>
      <div className="login-card">
        <h2>Forgot Password</h2>
        <p>Enter your email to receive OTP</p>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <button
          className="signin-btn"
          onClick={() => navigate("/otp")}
        >
          Get OTP
        </button>

        {/* Back navigation based on role */}
        <p
          className="signup-text"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(role === "agent" ? "/" : "/admin-login")
          }
        >
          Back to Login
        </p>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;