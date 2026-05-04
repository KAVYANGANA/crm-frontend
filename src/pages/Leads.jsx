import { Search, Pencil, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Leads() {
  const leads = [
    {
      name: "Lead1",
      company: "ABC COMPANY",
      email: "abccomp@gmail.com",
      phone: "+91 1234567890",
      assigned: "Agent1",
      status: "New",
    },
    {
      name: "Lead2",
      company: "ABC COMPANY",
      email: "abccomp@gmail.com",
      phone: "+91 1234567890",
      assigned: "Agent1",
      status: "Closed",
    },
    {
      name: "Lead3",
      company: "ABC COMPANY",
      email: "abccomp@gmail.com",
      phone: "+91 1234567890",
      assigned: "Agent1",
      status: "Deal",
    },
    {
      name: "Lead4",
      company: "ABC COMPANY",
      email: "abccomp@gmail.com",
      phone: "+91 1234567890",
      assigned: "Agent1",
      status: "Closed",
    },
  ];

  const navigate = useNavigate();

  const statusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-600";
      case "Closed":
        return "bg-red-100 text-red-600";
      case "Deal":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-[#e9eff5] min-h-screen px-8 pt-6">

      {/* Search + Button */}
      <div className="bg-[#dbe3ea] px-8 py-6 flex justify-between items-center rounded-b-1x1">
        
        {/* Search */}
        <div className="flex items-center bg-white px-5 py-2.5 rounded-full w-[460px] shadow-sm">
          <Search size={16} className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search Leads..."
            className="outline-none w-full text-[13px]"
          />
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/add-lead")}
          className="bg-blue-700 text-white px-6 py-2.5 rounded-full text-[13px]"
        >
          + Add Lead
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mt-5 px-1">
        <button className="bg-white px-4 py-2 rounded-md shadow-sm text-[13px]">
          Status
        </button>
        <button className="bg-white px-4 py-2 rounded-md shadow-sm text-[13px]">
          Date
        </button>
      </div>

      {/* Table */}
      <div className="bg-white mt-5 rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full text-[13px]">

          {/* Header */}
          <thead className="text-gray-500 text-[12px] border-b border-[#E5E7EB]">
            <tr>
              <th className="px-8 py-3 text-left">Name</th>
              <th className="text-left">Company</th>
              <th className="text-left">Contact</th>
              <th className="text-left">Assigned to</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {leads.map((lead, index) => (
              <tr
                key={index}
                className="border-b border-[#E5E7EB] hover:bg-gray-50"
              >
                
                {/* Name */}
                <td className="px-8 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    L
                  </div>
                  {lead.name}
                </td>

                <td>{lead.company}</td>

                {/* Contact */}
                <td className="text-[12px] leading-4">
                  <div>{lead.email}</div>
                  <div>{lead.phone}</div>
                </td>

                <td>{lead.assigned}</td>

                {/* Status */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-medium ${statusStyle(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="text-center">
                  <div className="flex justify-center gap-3">
                    <Pencil size={16} className="cursor-pointer" />
                    <Trash2 size={16} className="cursor-pointer" />
                    <Eye size={16} className="cursor-pointer" />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Leads;