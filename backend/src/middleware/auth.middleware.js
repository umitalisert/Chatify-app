import jwt from "jsonwebtoken";
import User from "../modal/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ msg: "not authorized" });

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) return res.status(401).json({ msg: "not authorized" });

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ msg: "not authorized" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};
