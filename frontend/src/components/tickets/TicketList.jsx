export default function TicketList({ tickets }) {
  if (tickets.length === 0) {
    return <p className="text-gray-500">No tickets yet</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tickets.map((t, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">{t.title}</h3>
          <p className="text-sm text-gray-500">{t.description}</p>
          <span className="text-xs text-blue-600">{t.status}</span>
        </div>
      ))}
    </div>
  );
}

