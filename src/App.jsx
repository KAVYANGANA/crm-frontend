import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Pages
import AgentList from "./pages/agents/AgentList";
import AddAgent from "./pages/agents/AddAgent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          {/* DEFAULT PAGE */}
          <Route index element={<AgentList />} />

          {/* ROUTES */}
          <Route path="agents" element={<AgentList />} />
          <Route path="add-agent" element={<AddAgent />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;