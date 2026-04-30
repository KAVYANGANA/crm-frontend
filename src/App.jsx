import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

import AddLead from "./pages/AddLead";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="add-lead" element={<AddLead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;