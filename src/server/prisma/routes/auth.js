import express from "express";
import { createUser } from "../../services/userService";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await createUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
});

export default router;
