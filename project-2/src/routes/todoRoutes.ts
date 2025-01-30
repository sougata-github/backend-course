import { Router } from "express";

import db from "../db.ts";

const router = Router();

//getting all the todos for logged-in user
router.get("/", (req, res) => {});

//creating a todo
router.post("/", (req, res) => {});

//updating a todo -> dynamic params
router.put("/:id", (req, res) => {});

//deleting a todo -> dynamic params
router.delete("/:id", (req, res) => {});

export default router;
