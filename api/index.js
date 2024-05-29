import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

//diskStorage

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploadedFiles");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const fileFilter = function (req, file, cb) {
//   if (file.mimeType == "image/JPG") {
//     cb(null, true);
//   } else {
//     req.errorMessage = "Not a valid file";
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.post("/api/upload-file", upload.array("file"), (req, res) => {
//   if (req.errorMessage) return res.json(req.errorMessage);
//   return res.status(200).json("Uploaded");
// });

//Memory Storage

const storage = multer({
  storage: multer.memoryStorage(),
});

app.post("/api/upload-file", storage.single("file"), (req, res) => {
  const dir = "./uploadedFiles";
  const filename = Date.now() + path.extname(req.file.originalname);
  fs.writeFileSync(dir + "/" + filename, req.file.buffer);
  res.json("Sucess");
});
app.listen(8800, () => {
  console.log("API working");
});
