import jwt from "jsonwebtoken";
import { db } from "../connect.js";
import moment from "moment/moment.js";

export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not looged In");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q = "SELECT * FROM posts where userId=?";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not looged In");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const q =
      "INSERT INTO posts (`desc`,`img`,`userId`,`createdAt`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.status(500).json(err);
      return res.status(200).json("Post is created");
    });
  });
};
