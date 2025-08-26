import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";
import axios from "axios";
import config from "../config/index.js";
import fs from "fs";
import FormData from "form-data";

const pdfToWord = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/word",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

const wordToPdf = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/pdf",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

const pfdToImg = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/jpg",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

const imgToPdf = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/pdf",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

const pdfToExcel = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/excel",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

const pdfToPpt = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  // Create form data and append the file
  const data = new FormData();
  data.append("file", fs.createReadStream(req.file.path)); // Path from multer

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.pdfrest.com/powerpoint",
    headers: {
      "Api-Key": "ebc0b4a0-9ded-4be0-b4e5-98ad3a935b30",
    },
    data: data,
  };

  const response = await axios(config);
  // console.log(JSON.stringify(response.data));

  return res.status(200).json(
    new ApiResponse(200, "File converted successfully", {
      fileUrl: response.data?.outputUrl,
    })
  );
});

export { pdfToWord, wordToPdf, pfdToImg, imgToPdf, pdfToExcel, pdfToPpt };
