import { ENV } from "./env.js";
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
      ],
    }),

    slidingWindow({
      mode: "LIVE",
      max: 100,
      interval: 60,
    }),
  ],
});
export default aj;
