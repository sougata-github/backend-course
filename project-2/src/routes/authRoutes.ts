import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import db from "../db.ts";

const SECRET = process.env.JWT_SECRET || "backup_secret_key";

const router = Router();

//signup route
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  //encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  //save credentials to db
  try {
    const insertUser = db.prepare(`
            INSERT INTO user (username, password)
            VALUES (?, ?)
        `);
    const result = insertUser.run(username, hashedPassword);

    // adding a default todo
    const defaultTodo = `Hello! Add your first todo`;
    const insertTodo = db.prepare(`
        INSERT INTO todo (user_id, task)
        VALUES (?, ?)
        `);
    insertTodo.run(result.lastInsertRowid, defaultTodo);

    //create a token
    const token = jwt.sign({ id: result.lastInsertRowid }, SECRET, {
      expiresIn: "24h",
    });

    //this token is returned as a response to the client, which is then stored in a cookie/local-storage to check for a valid user.

    //checking part is in middleware
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

router.post("/login", (req, res) => {});

export default router;
