import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";

import LoginAgent from "./pages/LoginAgent";
import LoginAdmin from "./pages/LoginAdmin";
import SignupAdmin from "./pages/SignupAdmin";
import ForgotPassword from "./pages/ForgotPassword";
import OtpPage from "./pages/OtpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication routes */}
        <Route path="/" element={<LoginAgent />} />
        <Route path="/agent-login" element={<LoginAgent />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin-signup" element={<SignupAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpPage />} />

        {/* Application routes with layout */}
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="add-lead" element={<AddLead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;