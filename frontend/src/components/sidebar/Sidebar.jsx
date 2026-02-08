import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">🐛 Bug Tracker</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/projects" className="block hover:text-blue-400">
          Projects
        </Link>
        <button
          onClick={logout}
          className="mt-10 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
