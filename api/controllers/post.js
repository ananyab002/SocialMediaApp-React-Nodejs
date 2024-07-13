export const getPosts = (req, res) => {
  const token = res.cookies.token;
  if (!token) return res.status(401).json("User not logged In");

  jwt.verify(token, "secretkey", (err, userData) => {
    if (err) return res.status(403).json("Token is not valid");

    const q =
      "SELECT p.*,u.id as userId, name, profilePic FROM posts p JOIN users u ON (u.id=p.userId) LEFT JOIN relationships r ON (p.userId=r.followedUserId) WHERE  ";
  });
};

export const addPost = (req, res) => {};

export const deletePost = (req, res) => {};
