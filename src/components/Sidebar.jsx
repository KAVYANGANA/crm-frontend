import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  BarChart3,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Leads", path: "/leads", icon: Users },
    { name: "Leads Status", path: "#", icon: BarChart3 },
    { name: "Deals", path: "#", icon: Briefcase },
    { name: "Settings", path: "#", icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#e9eff5] min-h-screen flex flex-col justify-between">

      {/* TOP */}
      <div>
        <div className="p-6 font-semibold text-sm">
          CRM Name and logo
        </div>

        <ul className="px-3 space-y-2">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                    ${
                      isActive
                        ? "bg-white shadow-sm font-semibold text-black"
                        : "text-black hover:bg-white/60"
                    }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-black" : "text-gray-700"}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* BOTTOM */}
      <div className="p-5">
        <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;