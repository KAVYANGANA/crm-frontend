import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">

      {/* LEFT SIDE (COMMON) */}
      <div className="auth-left">

        {/* TOP RIGHT BRAND */}
        <div className="brand-block">
          <h1 className="brand-title">CRM NAME</h1>
          <p className="tagline">Tagline</p>
        </div>

        {/* BOTTOM TEXT */}
        <h2 className="left-text">
          Power Your Customer Relationships
        </h2>

      </div>

      {/* RIGHT SIDE (CHANGES PER PAGE) */}
      <div className="auth-right">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;