import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => res.send("Hello from signup route"));
router.get("/login");
router.get("/logout");
router.get("/update");

export default router;
