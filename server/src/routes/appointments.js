import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// POST /api/appointments - Book a new appointment
router.post("/", async (req, res) => {
  try {
    const {
      location,
      date,
      time,
      service,
      firstName,
      lastName,
      email,
      phone,
      dob,
    } = req.body;

    // Validate required fields
    if (
      !location ||
      !date ||
      !time ||
      !service ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !dob
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the time slot is already booked
    const existingAppointment = await Appointment.findOne({
      location,
      date,
      time,
      status: { $ne: "cancelled" },
    });

    if (existingAppointment) {
      return res.status(409).json({
        error: "This time slot is already booked. Please select another time.",
      });
    }

    // Create new appointment
    const appointment = await Appointment.create({
      service,
      location,
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      dob,
      status: "confirmed",
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      appointmentId: appointment._id,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res
      .status(500)
      .json({ error: "Failed to book appointment. Please try again." });
  }
});

// GET /api/appointments - Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find({
      status: { $ne: "cancelled" },
    }).sort({ date: 1, time: 1 });

    res.json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

// POST /api/appointments/availability - Check availability
router.post("/availability", async (req, res) => {
  try {
    const { location, date } = req.body;

    if (!location || !date) {
      return res.status(400).json({ error: "Location and date are required" });
    }

    // Find all appointments for the given location and date that are not cancelled
    const bookedAppointments = await Appointment.find({
      location,
      date,
      status: { $ne: "cancelled" },
    }).select("time");

    // Extract booked time slots
    const bookedTimes = bookedAppointments.map((apt) => apt.time);

    res.json({ bookedTimes });
  } catch (error) {
    console.error("Error checking availability:", error);
    res.status(500).json({ error: "Failed to check availability" });
  }
});

export default router;
