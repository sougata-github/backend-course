import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "backup_secret_key";

interface AuthRequest extends Request {
  userId?: string;
}

function authMiddleware(req: AuthRequest, res: Response, next: any) {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(401).send({ message: "No token provided" });
  }

  jwt.verify(token!, SECRET, (err, decoded: any) => {
    if (err) {
      res.status(401).send({ message: "Invalid token" });
    }

    if (decoded && decoded.id) {
      req.userId = decoded.id;
    }
    next();
  });
}

export default authMiddleware;
