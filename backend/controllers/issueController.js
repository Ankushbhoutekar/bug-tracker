import Issue from "../models/Issue.js";

// CREATE ISSUE
export const createIssue = async (req, res) => {
  try {
    const { title, description, projectId } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ message: "Title & Project required" });
    }

    const issue = await Issue.create({
      title,
      description,
      project: projectId,
    });

    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET PROJECT ISSUES
export const getProjectIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ project: req.params.projectId });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
