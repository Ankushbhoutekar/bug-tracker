import { updateTicketStatus } from "../../api/ticketApi";

export default function TicketCard({ ticket, onStatusChange }) {
  const handleChange = async (e) => {
    try {
      await updateTicketStatus(ticket._id, e.target.value);
      onStatusChange(); // tickets re-fetch
    } catch (err) {
      console.error("Status update failed", err);
      alert("Status update failed");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{ticket.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {ticket.description}
      </p>

      <select
        value={ticket.status}
        onChange={handleChange}
        className="border px-2 py-1 rounded text-sm"
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

