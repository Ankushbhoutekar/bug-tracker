import axios from "./api";

export const createIssue = (data) =>
  axios.post("/issues", data);

export const getProjectIssues = (projectId) =>
  axios.get(`/issues/${projectId}`);
