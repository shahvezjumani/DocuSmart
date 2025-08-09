import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ name: "shahvez" });
});

app.use(errorHandler);

export default app;
