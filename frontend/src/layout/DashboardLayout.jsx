import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          background: "linear-gradient(180deg,#0f172a,#020617)",
          color: "#fff",
          padding: 20,
        }}
      >
        <h2 style={{ marginBottom: 30 }}>🐞 Bug Tracker</h2>

        <NavLink to="/dashboard" style={link}>Dashboard</NavLink>
        <NavLink to="/projects" style={link}>Projects</NavLink>

        <button
          style={{
            marginTop: 30,
            width: "100%",
            padding: 10,
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, background: "#f8fafc", padding: 30 }}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

const link = {
  display: "block",
  padding: "10px 0",
  color: "#e5e7eb",
  textDecoration: "none",
};

