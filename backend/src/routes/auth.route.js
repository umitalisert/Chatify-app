import express from "express";

const router = express.Router();

router.get("/signup");
router.get("/login");
router.get("/logout");
router.get("/update");

export default router;
