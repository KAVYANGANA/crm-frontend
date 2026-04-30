import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";

function AddLead() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#e6edf3] min-h-screen">
  
      {/* FORM SECTION */}
      <div className="p-6">

        <div className="bg-white max-w-2xl mx-auto rounded-2xl shadow">

          {/* CARD HEADER */}
          <div className="border-b border-gray-200 px-6 py-4 text-center font-medium">
            Add New Lead
          </div>

          {/* FORM */}
          <div className="p-6 space-y-5">

            {/* Lead Name */}
            <div>
              <label className="text-sm font-medium">Lead Name *</label>
              <input
                type="text"
                placeholder="Agent Name"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium">Phone Number *</label>

              <div className="flex mt-1 border border-gray-300 rounded overflow-hidden">
                
                <div className="bg-gray-100 px-3 flex items-center text-sm">
                  🇮🇳 +91
                </div>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2 text-xs">
                <input type="checkbox" className="accent-blue-600" />
                <span>Use as whatsapp number</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-sm font-medium">Whatsapp number</label>
              <input
                type="text"
                placeholder="Enter whatsapp number"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address *</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-sm font-medium">Company Name</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Source */}
            <div>
              <label className="text-sm font-medium">Source</label>
              <select className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Incoming call</option>
                <option>Website</option>
                <option>Referral</option>
              </select>
            </div>

          </div>

          {/* FOOTER BUTTONS */}
          <div className="flex justify-between px-6 py-4 border-t border-gray-200">
            
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded text-sm"
            >
              Cancel
            </button>

            <button className="bg-blue-700 text-white px-5 py-2 rounded text-sm">
              Add Lead
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AddLead;