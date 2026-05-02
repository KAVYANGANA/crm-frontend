import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAgent from "./pages/LoginAgent";
import LoginAdmin from "./pages/LoginAdmin";
import SignupAdmin from "./pages/SignupAdmin";
import ForgotPassword from "./pages/ForgotPassword";
import OtpPage from "./pages/OtpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default → Agent Login */}
        <Route path="/" element={<LoginAgent />} />

        {/* Agent Login (optional route) */}
        <Route path="/agent-login" element={<LoginAgent />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<LoginAdmin />} />

        {/* Admin Signup */}
        <Route path="/admin-signup" element={<SignupAdmin />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/otp" element={<OtpPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;