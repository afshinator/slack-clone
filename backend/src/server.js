import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";


const app = express();

app.use(clerkMiddleware()); // to make req.auth available

const PORT = ENV.PORT || 5001;

app.get("/", (req, res) => {
  res.send("hello world 369");
});

app.use(express.json()); // json body
app.use("/api/inngest", serve({ client: inngest, functions }));

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server started on port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();

export default app;