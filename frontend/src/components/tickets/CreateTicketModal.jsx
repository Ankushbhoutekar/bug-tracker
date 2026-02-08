import { useState } from "react";
import { createTicket } from "../../api/ticketApi";

export default function CreateTicketModal({ projectId, onClose, onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");

  const submit = async () => {
    await createTicket({ title, description, status, projectId });
    onCreated();     // 🔥 refresh list
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Create Ticket</h2>

        <input
          className="border w-full p-2 mb-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border w-full p-2 mb-2"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border w-full p-2 mb-4"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={submit}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}




