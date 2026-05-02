import React from "react";
import AuthLayout from "../components/AuthLayout";

function SignupAdmin() {
  return (
    <AuthLayout>
      <div className="signup-card">

        {/* HEADER (FIXED) */}
        <div className="signup-header">
          <h2>Get Started</h2>
          <p>Enter your details</p>
        </div>

        {/* SCROLLABLE FORM */}
        <div className="signup-form">
          <label>Organization Name</label>
          <input type="text" placeholder="Organization Name" />

          <label>Category</label>
          <input type="text" placeholder="Category" />

          <label>Admin Name</label>
          <input type="text" placeholder="Admin Name" />

          <label>Contact Number</label>
          <input type="text" placeholder="Contact Number" />

          <label>Email Address</label>
          <input type="email" placeholder="Email Address" />

          <label>Password</label>
          <div className="password-box">
            <input type="password" placeholder="Password" />
            <span className="eye-icon">👁</span>
          </div>

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>

        {/* BUTTON (FIXED) */}
        <div className="signup-footer">
          <button className="signin-btn">Create Account</button>
        </div>

      </div>
    </AuthLayout>
  );
}

export default SignupAdmin;