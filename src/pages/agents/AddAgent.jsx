import React from "react";

function AddAgent() {
  return (
    <div className="p-6 bg-[#eaf1f6] min-h-screen">

      {/* PAGE WRAPPER */}
      <div className="bg-[#cfdbe6] p-6 rounded-2xl">

        {/* FORM CARD */}
        <div className="bg-white p-8 rounded-2xl shadow max-w-3xl mx-auto">

          {/* TITLE */}
          <h2 className="text-xl font-semibold mb-6">
            Add New Agent
          </h2>

          {/* FORM GRID */}
          <div className="grid grid-cols-2 gap-4">

            {/* FULL NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />

            {/* PHONE */}
            <div className="flex">
              <span className="bg-gray-100 px-3 flex items-center rounded-l-lg border">
                +91
              </span>
              <input
                type="text"
                placeholder="Enter phone number"
                className="border p-3 rounded-r-lg w-full"
              />
            </div>

            {/* WHATSAPP */}
            <input
              type="text"
              placeholder="Whatsapp Number"
              className="border p-3 rounded-lg"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg"
            />

            {/* ROLE */}
            <select className="border p-3 rounded-lg col-span-2">
              <option>Sales Agent</option>
              <option>Manager</option>
              <option>Support</option>
            </select>

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
            />

            {/* CONFIRM PASSWORD */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-3 rounded-lg"
            />

          </div>

          {/* CHECKBOX */}
          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm text-gray-600">
              Send email with login credentials
            </label>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">

            <button className="px-6 py-2 border rounded-full">
              Cancel
            </button>

            <button className="px-6 py-2 bg-blue-700 text-white rounded-full">
              Add Agent
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AddAgent;