import { fileURLToPath } from "url";
import express from "express";
import path from "path";

//Route imports (.js since type=module)
import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware.js";

const PORT = process.env.PORT || "8000";

const app = express();

// Resolve file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
