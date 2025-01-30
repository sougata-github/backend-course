import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
const app = express();
const PORT = process.env.PORT || "8000";
//get the file path from the URL of the current module
const __fileName = fileURLToPath(import.meta.url);
//get directory name from file path
const __dirname = dirname(__fileName);
//serving the HTML file from the public directory
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
