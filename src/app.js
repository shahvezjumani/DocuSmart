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

import pdfConvertionRouter from "./routes/pdfConverstion.route.js";
app.use("/api/v1", pdfConvertionRouter);

// app.use(errorHandler);

export default app;
