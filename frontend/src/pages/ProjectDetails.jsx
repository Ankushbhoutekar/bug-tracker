import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createIssue, getProjectIssues } from "../api/ticketApi";
import api from "../api/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState("");

  const loadIssues = async () => {
    const res = await getProjectIssues(id);
    setIssues(res.data);
  };

  const handleAddIssue = async () => {
    if (!title.trim()) return alert("Issue title required");

    await createIssue({ title, projectId: id });
    setTitle("");
    loadIssues();
  };

  const handleDeleteProject = async () => {
    if (!window.confirm("Delete this project permanently?")) return;

    await api.delete(`/projects/${id}`);
    navigate("/projects");
  };

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <div style={{ padding: 30, background: "#f5f7fb", minHeight: "100vh" }}>
      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <div>
          <h2>🧩 Project Issues</h2>
          <p style={{ color: "#666" }}>Project ID: {id}</p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={handleAddIssue}
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            ➕ Add Issue
          </button>

          <button
            onClick={handleDeleteProject}
            style={{
              background: "#dc2626",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            🗑 Delete Project
          </button>
        </div>
      </div>

      {/* ADD ISSUE INPUT */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: 10,
            width: 300,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* ISSUE LIST */}
      {issues.length === 0 ? (
        <div
          style={{
            background: "#fff",
            padding: 40,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          <h3>No issues found</h3>
          <p>Create your first issue for this project.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 15 }}>
          {issues.map((issue) => (
            <div
              key={issue._id}
              style={{
                background: "#fff",
                padding: 15,
                borderRadius: 8,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <b>{issue.title}</b>
                <p style={{ fontSize: 13, color: "#666" }}>
                  Status: {issue.status}
                </p>
              </div>

              <span
                style={{
                  background:
                    issue.status === "Open" ? "#e0f2fe" : "#dcfce7",
                  padding: "4px 10px",
                  borderRadius: 20,
                  fontSize: 12,
                }}
              >
                {issue.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
