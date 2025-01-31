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
router.post("/", (req: any, res) => {
  const { task } = req.body;
  const insertTodo = db.prepare(`
      INSERT INTO todo (user_id, task)
      VALUES (?, ?)
    `);
  const result = insertTodo.run(req.userId, task);

  res.json({ id: result.lastInsertRowid, task, completed: 0 });
});

//updating a todo -> dynamic params
router.put("/:id", (req, res) => {
  const { completed } = req.body;
  const { id } = req.params; //coming from the url for example: /todos/1 or /todos/2

  const updatedTodo = db.prepare(`
    UPDATE todo SET completed = ? WHERE id = ?
    `);
  updatedTodo.run(completed, id);

  res.json({
    message: "Todo completed",
  });
});

//deleting a todo -> dynamic params
router.delete("/:id", (req: any, res) => {
  const { id } = req.params;

  const deletedTodo = db.prepare(`
    DELETE FROM todo WHERE id = ? AND user_id = ?
    `);
  deletedTodo.run(id, req.userId);

  res.json({
    message: "Todo deleted",
  });
});

export default router;
