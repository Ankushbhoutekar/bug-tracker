import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description, projectId } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ message: "Title & Project required" });
    }

    const ticket = await Ticket.create({
      title,
      description,
      project: projectId,
      createdBy: req.user._id,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTicketsByProject = async (req, res) => {
  try {
    const tickets = await Ticket.find({
      project: req.params.projectId,
    });

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

