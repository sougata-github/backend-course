import { Router } from "express";

import db from "../db.js";

const router = Router();

//fetch todos
router.get("/", async (req: any, res) => {
  const todos = await db.todo.findMany({
    where: {
      userId: parseInt(req.userId),
    },
  });

  res.json(todos);
});

//create todo
router.post("/", async (req: any, res) => {
  const { task } = req.body;

  const todo = await db.todo.create({
    data: {
      task,
      userId: parseInt(req.userId),
    },
  });

  res.json({ id: todo.id, task, completed: 0 });
});

//update todo
router.put("/:id", async (req: any, res) => {
  const { completed } = await req.body;
  const { id } = req.params;

  await db.todo.update({
    where: {
      id: parseInt(id),
      userId: parseInt(req.userId),
    },
    data: {
      completed: !!completed,
    },
  });

  res.status(204).send({
    message: "Todo completed.",
  });
});

//delete todo
router.delete("/:id", async (req: any, res) => {
  const { id } = req.params;

  await db.todo.delete({
    where: {
      id: parseInt(id),
      userId: parseInt(req.userId),
    },
  });

  res.status(204).send({
    message: "Todo completed.",
  });
});

export default router;
