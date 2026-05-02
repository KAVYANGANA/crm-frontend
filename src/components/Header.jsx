import { useLocation, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Decide title based on route
  let title = "Dashboard";
  let showBack = false;

  if (location.pathname === "/leads") {
    title = "All Leads";
  }

  if (location.pathname === "/add-lead") {
    title = "Add New Lead";
    showBack = true;
  }

  return (
    <div className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center rounded-bl-3xl">
      
      {/* LEFT SIDE */}
      <div>
        {showBack && (
          <p
            onClick={() => navigate(-1)}
            className="text-sm cursor-pointer"
          >
            ← Back
          </p>
        )}

        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
        <span>Agent Name</span>
        <Bell size={18} />
      </div>
    </div>
  );
}

export default Header;