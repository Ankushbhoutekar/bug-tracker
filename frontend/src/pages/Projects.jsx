import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import CreateProjectModal from "../components/projects/CreateProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p._id}
            onClick={() => navigate(`/projects/${p._id}`)}
            className="bg-white p-4 rounded shadow hover:shadow-md cursor-pointer"
          >
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <CreateProjectModal
          onClose={() => setShowModal(false)}
          onCreated={(project) =>
            setProjects((prev) => [project, ...prev])
          }
        />
      )}
    </div>
  );
}

