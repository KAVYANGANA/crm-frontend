import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

// ✅ AUTH PAGES
import LoginAgent from "./pages/LoginAgent";
import LoginAdmin from "./pages/LoginAdmin";
import SignupAdmin from "./pages/SignupAdmin";
import ForgotPassword from "./pages/ForgotPassword";
import OtpPage from "./pages/OtpPage";

// ✅ AGENT PAGES (YOUR WORK)
import AgentList from "./pages/agents/AgentList";
import AddAgent from "./pages/agents/AddAgent";

// ✅ OTHER PAGES (TEAMMATE)
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAgent />} />
        <Route path="/agent-login" element={<LoginAgent />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin-signup" element={<SignupAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpPage />} />

        <Route path="/app" element={<MainLayout />}>

          {/* DEFAULT PAGE → AGENTS */}
          <Route index element={<AgentList />} />

          {/* AGENT ROUTES */}
          <Route path="agents" element={<AgentList />} />
          <Route path="add-agent" element={<AddAgent />} />

          {/* TEAMMATE ROUTES */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="add-lead" element={<AddLead />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;