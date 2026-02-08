import express from "express";
import {
  createIssue,
  getProjectIssues,
} from "../controllers/issueController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createIssue);
router.get("/:projectId", protect, getProjectIssues);

export default router;
