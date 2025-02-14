import { fileURLToPath } from "url";
import express from "express";
import path from "path";

import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware.js";

const app = express();

const PORT = process.env.PORT || "8000";

/*
get the 'file path' from the URL of the current module

for example: file:///D:/WebDev/backend/src/index.ts

fileURLToPath converts into normal file path: D:\WebDev\backend\src\index.ts on Windows

get directory name from file path

for example: If __fileName is "D:\WebDev\backend\src\index.ts"

then __dirname becomes "D:\WebDev\backend\src"
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
Middleware

Tells express to serve all files from the public folder as static assets. Any requests for the css files will be resolved to the public directory

this basically states public directory is one level above and not in the src directory.
*/
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

//serving the HTML file from the public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//routes -> this takes all the routes adds them at the end of auth or todos
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
