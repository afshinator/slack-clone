import express from "express";
import { ENV } from "./config/env.js";


const app = express();

const PORT = ENV.PORT || 5001;

app.get("/", (req, res) => {
  res.send("hello world 369");
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
