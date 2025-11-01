import express from "express";
import {
  login,
  logout,
  signUp,
  update,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.get("/login", login);
router.get("/logout", logout);
router.get("/update", update);

export default router;
