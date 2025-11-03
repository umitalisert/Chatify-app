import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const desicion = await aj.protect(req);
    if (desicion.isDenied()) {
      if (desicion.reason.isRateLimit()) {
        res.status(429).json({ msg: "Rate limit exceeded" });
      } else if (desicion.reason.isBot()) {
        res.status(403).json({ msg: "Spoofed bot detected" });
      } else {
        return res
          .status(403)
          .json({ msg: "Access denied by security policy" });
      }
    }
    // check for spoofed bots
    if (desicion.results.some(isSpoofedBot)) {
      return res.status(403).json({ msg: "Spoofed bot detected" });
    }
    next();
  } catch (error) {
    console.log("Arcjet Protection Error:", error);
    next();
  }
};
