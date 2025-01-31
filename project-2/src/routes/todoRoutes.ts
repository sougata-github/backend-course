import { Router } from "express";

import db from "../db.ts";

const router = Router();

//getting all the todos for logged-in user
router.get("/", (req: any, res) => {
  const getTodos = db.prepare(`SELECT * FROM todo WHERE user_id = ?`);

  const todos = getTodos.all(req.userId);
  res.json(todos);
});

//creating a todo
router.post("/", (req, res) => {});

//updating a todo -> dynamic params
router.put("/:id", (req, res) => {});

//deleting a todo -> dynamic params
router.delete("/:id", (req, res) => {});

export default router;
