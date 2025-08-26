import express from "express";
import { upload } from "../lib/multer.js"; // Your multer setup
import {
  pdfToWord,
  wordToPdf,
  pfdToImg,
  imgToPdf,
  pdfToExcel,
  pdfToPpt,
} from "../controllers/pdfConversion.controller.js";

const router = express.Router();

router.post("/pdf-to-word", upload.single("file"), pdfToWord);
router.post("/word-to-pdf", upload.single("file"), wordToPdf);
router.post("/pdf-to-img", upload.single("file"), pfdToImg);
router.post("/img-to-pdf", upload.single("file"), imgToPdf);
router.post("/pdf-to-excel", upload.single("file"), pdfToExcel);
router.post("/pdf-to-ppt", upload.single("file"), pdfToPpt);


export default router;

