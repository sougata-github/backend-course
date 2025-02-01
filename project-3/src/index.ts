import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

//Route imports
import todoRoutes from "./routes/todoRoutes.ts";
import authRoutes from "./routes/authRoutes.ts";
import authMiddleware from "./middleware.ts";

const PORT = process.env.PORT || "8000";

const app = express();

// Resolve file paths
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// Middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

// Routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
