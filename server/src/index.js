import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentsRouter from "./routes/appointments.js";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "LABO BEN HASSEN API Server",
    endpoints: {
      health: "/health",
      appointments: "/api/appointments",
      availability: "/api/appointments/availability",
    },
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/appointments", appointmentsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
