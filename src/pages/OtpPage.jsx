import React from "react";
import AuthLayout from "../components/AuthLayout";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/auth.css";

function OtpPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // get role from URL (admin / agent)
  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  return (
    <AuthLayout>
      <div className="login-card">
        <h2>Enter OTP</h2>
        <p>Enter the OTP sent to your email</p>

        {/* OTP */}
        <label>OTP</label>
        <input type="text" placeholder="Enter OTP" />

        {/* Button */}
        <button
          className="signin-btn"
          onClick={() =>
            navigate(role === "agent" ? "/" : "/admin-login")
          }
        >
          Sign In
        </button>

        {/* Back */}
        <p
          className="signup-text"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/forgot-password")}
        >
          Back
        </p>
      </div>
    </AuthLayout>
  );
}

export default OtpPage;