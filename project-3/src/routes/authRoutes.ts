import { User } from "@prisma/client";
import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import db from "../db.js";

const router = Router();

const SECRET = process.env.JWT_SECRET || "backup_secret_key";

router.get("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    await db.todo.create({
      data: {
        task: "Default todo.",
        userId: user.id,
      },
    });

    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

router.get("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(404).send({
        message: "User not found!",
      });
    }

    const passwordMatches = bcrypt.compareSync(
      password,
      (user as User)?.password
    );

    if (!passwordMatches) {
      res.status(401).send({
        message: "Unauthorized!",
      });
    }

    const token = jwt.sign({ id: user?.id }, SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

export default router;
