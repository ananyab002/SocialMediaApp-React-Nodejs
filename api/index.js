import express from "express";
import authRouter from "./routers/auth.js";
import postsRouter from "./routers/posts.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

app.listen(8800, () => {
  console.log("API working");
});
