import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AgentList() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null);

  const [editOpen, setEditOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const agents = [
    { name: "Agent 1", leads: 10, deals: 5 },
    { name: "Agent 2", leads: 15, deals: 4 },
    { name: "Agent 3", leads: 20, deals: 3 },
    { name: "Agent 4", leads: 11, deals: 9 },
    { name: "Agent 5", leads: 7, deals: 5 },
  ];

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="p-6 bg-[#eaf1f6] min-h-screen">

      <div className="bg-[#cfdbe6] p-6 rounded-2xl">

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <p>Total Agents</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p>Total Revenue</p>
            <h2 className="text-2xl font-bold">₹1,25,000</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p>Active Deals</p>
            <h2 className="text-2xl font-bold">30</h2>
          </div>
        </div>

        {/* SEARCH + BUTTON */}
        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center bg-white px-4 py-2 rounded-full w-1/3 shadow">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search agent"
              className="outline-none w-full"
            />
          </div>

          <button
            onClick={() => navigate("/add-agent")}
            className="bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            + Add Agent
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-6 font-semibold px-6 py-4 border-b bg-gray-50">
            <p>Name</p>
            <p>Contact</p>
            <p>Leads</p>
            <p>Deals</p>
            <p>Revenue</p>
            <p>Action</p>
          </div>

          {/* ROWS */}
          {agents.map((agent, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center px-6 py-4 border-b"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                {agent.name}
              </div>

              <div>
                <p>+91 9876543210</p>
                <p className="text-sm text-gray-500">email@email.com</p>
              </div>

              <p>{agent.leads}</p>
              <p>{agent.deals}</p>
              <p>₹50000</p>

              {/* ACTION */}
              <div className="relative">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(index);
                  }}
                  className="text-xl"
                >
                  ⋮
                </button>

                {openMenu === index && (
                  <div className="absolute right-0 top-6 bg-white shadow-lg rounded-lg w-28 z-10">

                    <button
                      onClick={() => {
                        setEditOpen(true);
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => {
                        setRemoveOpen(true);
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      🗑 Remove
                    </button>

                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[500px] rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <div className="space-y-3">

              <input className="border p-3 w-full rounded-lg" placeholder="Full Name" />

              <div className="flex">
                <span className="bg-gray-100 px-3 flex items-center border rounded-l-lg">
                  +91
                </span>
                <input className="border p-3 w-full rounded-r-lg" placeholder="Phone Number" />
              </div>

              <input className="border p-3 w-full rounded-lg" placeholder="Whatsapp Number" />
              <input className="border p-3 w-full rounded-lg" placeholder="Email Address" />

              <select className="border p-3 w-full rounded-lg">
                <option>Sales Agent</option>
                <option>Manager</option>
              </select>

            </div>

            <div className="flex justify-end gap-3 mt-5">

              <button
                onClick={() => setEditOpen(false)}
                className="px-5 py-2 border rounded-full"
              >
                Cancel
              </button>

              <button className="px-5 py-2 bg-blue-700 text-white rounded-full">
                Edit Profile
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ================= REMOVE MODAL ================= */}
      {removeOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[500px] rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Remove Agent ?
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              This action cannot be undone. All assigned leads and tasks will be unassigned.
            </p>

            <p className="font-medium mb-2">
              What should happen to assigned leads?
            </p>

            <div className="space-y-2 text-sm">

              <label className="flex items-center gap-2">
                <input type="radio" name="lead" />
                Reassign to another agent
              </label>

              <select className="border p-2 w-full rounded-lg">
                <option>Select Agent</option>
              </select>

              <label className="flex items-center gap-2">
                <input type="radio" name="lead" />
                Keep unassigned
              </label>

            </div>

            <div className="flex justify-end gap-3 mt-5">

              <button
                onClick={() => setRemoveOpen(false)}
                className="px-5 py-2 border rounded-full"
              >
                Cancel
              </button>

              <button className="px-5 py-2 bg-red-600 text-white rounded-full">
                Remove
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default AgentList;